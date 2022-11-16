import cytoscape from "cytoscape";
import fcose, { FcoseLayoutOptions } from "cytoscape-fcose";
import { useEffect, useRef } from "react";
// import { DraggableCore } from "react-draggable";
import BronKerbosch from "@seregpie/bron-kerbosch";

cytoscape.use(fcose);

// import { data } from "../data/data";
import { data, rawEdges } from "../data/graph1";
// import { data, rawEdges } from "../data/graph2";
import { InputEdge } from "../types";

type Props = {
  height: number;
  width: number;
};

export const Render = ({ height, width }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    console.clear();
    console.time("render");
    console.log(BronKerbosch(rawEdges));

    const neighborMap = new Map<string, Set<string>>();
    data.elements
      .filter((element) => element.group === "nodes")
      .forEach((element) => {
        neighborMap.set(element.data.id, new Set<string>());
      });
    data.elements
      .filter((element): element is InputEdge => element.group === "edges")
      .forEach((element) => {
        const { source, target } = element.data;
        neighborMap.get(source)?.add(target);
        neighborMap.get(target)?.add(source);
      });

    const cliques = BronKerbosch(rawEdges).filter((set) => set.length > 3);

    const cliqueLookup = new Map<string, string>();
    const cliqueBridgeNodes = new Map<string, boolean>();
    let i = 0;
    cliques.forEach((clique) => {
      const cliqueId = `q${i}`;
      i++;

      clique.forEach((item) => {
        cliqueLookup.set(`n${item}`, cliqueId);
      });

      clique.forEach((item) => {
        const itemId = `n${item}`;
        const neighbors = neighborMap.get(itemId);
        if (
          neighbors &&
          [...neighbors].some((neighbor) => {
            const neighborsClique = cliqueLookup.get(neighbor);
            return !neighborsClique || neighborsClique !== cliqueId;
          })
        ) {
          cliqueBridgeNodes.set(itemId, true);
        }
      });
    });

    const nodeWeights = new Map<string, number>();
    const edgeWeights = new Map<string, number>();
    data.elements.forEach((element) => {
      if (element.group === "edges") {
        const { source, target } = element.data;
        edgeWeights.set(
          source,
          edgeWeights.has(source) ? edgeWeights.get(source)! + 1 : 1
        );
        edgeWeights.set(
          target,
          edgeWeights.has(target) ? edgeWeights.get(target)! + 1 : 1
        );

        nodeWeights.set(
          source,
          nodeWeights.has(source) ? nodeWeights.get(source)! + 1 : 1
        );
        nodeWeights.set(
          target,
          nodeWeights.has(target) ? nodeWeights.get(target)! + 1 : 1
        );
      }
    });
    data.elements.forEach((element) => {
      if (element.group === "nodes") {
        const weight = nodeWeights.get(element.data.id);
        element.data.label = `${element.data.id} (${weight})`;
      }
    });

    const cy = cytoscape({
      container: ref.current!,
      elements: data.elements,
      // headless: true,
      // styleEnabled: true,

      style: [
        {
          selector: "node[label]",
          style: {
            label: "data(label)",
          },
        },

        {
          selector: "edge[label]",
          style: {
            label: "data(label)",
          },
        },

        {
          selector: "node",
          style: {
            "background-color": "#2B65EC",
          },
        },

        {
          selector: ":parent",
          style: {
            "background-opacity": 0.333,
            "border-color": "#2B65EC",
          },
        },

        {
          selector: "edge",
          style: {
            "line-color": "#2B65EC",
          },
        },

        {
          selector: "node:selected",
          style: {
            "background-color": "#F08080",
            "border-color": "red",
          },
        },

        {
          selector: "edge:selected",
          style: {
            "line-color": "#F08080",
          },
        },
      ],
    });

    // cy.ready(() => {

    /** */
    // const layout1 = cy.layout({
    //   name: "euler",
    //   // @ts-ignore
    //   randomize: false,
    //   animate: false,
    //   springLength: (edge) => {
    //     const { source, target } = edge.data();
    //     const min = Math.min(
    //       edgeWeights.get(source)!,
    //       edgeWeights.get(target)!
    //     );
    //     // console.log(edge.id(), max - min);
    //     edge.data("label", min);

    //     switch (min) {
    //       case 1:
    //         return 1;
    //       case 2:
    //         return 2;
    //       case 3:
    //         return 60;
    //     }

    //     if (min < 8) {
    //       return 200;
    //     }

    //     return 250;
    //   },
    //   mass: (node) => {
    //     const weight = nodeWeights.get(node.id());

    //     switch (weight) {
    //       case 1:
    //       case 2:
    //         return 20;
    //       case 3:
    //       case 4:
    //         return 12;
    //       case 5:
    //       case 6:
    //         return 8;
    //       case 7:
    //       case 8:
    //         return 6;
    //     }

    //     return 2;
    //   },
    // });

    /** */
    const layout1 = cy.layout({
      name: "fcose",

      randomize: false,
      quality: "proof",

      uniformNodeDimensions: true,

      animate: false,

      numIter: 9_000,

      nodeRepulsion: (node: any) => {
        const weight = nodeWeights.get(node.id())!;

        const isInClique = !!cliqueLookup.get(node.id());

        switch (weight) {
          case 1:
            return 80_000;
          case 2:
            return 50_000;
          case 3:
            return 30_000;
          case 4:
            return 20_000;
        }

        if (weight > 10) {
          if (!isInClique) {
            return weight * 10_000;
          }
          return weight * 7500;
        }

        return weight * 3000;
      },

      idealEdgeLength: (edge: any) => {
        const { source, target } = edge.data();
        const min = Math.min(
          edgeWeights.get(source)!,
          edgeWeights.get(target)!
        );
        const max = Math.max(
          edgeWeights.get(source)!,
          edgeWeights.get(target)!
        );

        const sourceNode = nodeWeights.get(source)!;
        const targetNode = nodeWeights.get(target)!;
        const nodeMin = Math.min(sourceNode, targetNode);

        // edge.data("label", min);
        edge.data("label", nodeMin);

        switch (nodeMin) {
          case 1:
            return 2;
          case 2:
            return 4;
          case 3:
            return 6;
        }

        return max * 14;
      },

      edgeElasticity: (edge: any) => {
        // const { source, target } = edge.data();
        // const min = Math.min(
        //   edgeWeights.get(source)!,
        //   edgeWeights.get(target)!
        // );
        // const max = Math.max(
        //   edgeWeights.get(source)!,
        //   edgeWeights.get(target)!
        // );

        // const sourceNode = nodeWeights.get(source)!;
        // const targetNode = nodeWeights.get(target)!;
        // const nodeMin = Math.min(sourceNode, targetNode);

        // if (nodeMin < 2) {
        //   return 0.4;
        // }

        // return 0.45;
        return 0.4;
      },

      // Gravity force (constant)
      // gravity: 0.25,
      // gravity: 1,
      // Gravity range (constant) for compounds
      // gravityRangeCompound: 1.5,
      // gravityRangeCompound: 15,
      // Gravity force (constant) for compounds
      // gravityCompound: 1.0,
      // gravityCompound: 10,
      // Gravity range (constant)
      // gravityRange: 3.8,
      // gravityRange: 38,
      // Initial cooling factor for incremental layout
      // initialEnergyOnIncremental: 0.3,
      initialEnergyOnIncremental: 1.15,
    } as any);
    /**/

    layout1.one("layoutready", () => {
      cliques.forEach((set) => {
        const cliqueIds = set.map((number) => `n${number}`);
        const elements = cy
          .elements()
          .filter(
            (element) =>
              cliqueIds.includes(element.id()) &&
              !cliqueBridgeNodes.get(element.id())
          );

        // @ts-ignore
        const pos = elements.map((element) => element.position());
        const x: number[] = pos.map((p) => p.x);
        const y: number[] = pos.map((p) => p.y);

        const layout2 = elements.layout({
          name: "circle",
          fit: false,
          randomize: false,
          boundingBox: {
            x1: Math.min(...x),
            y1: Math.min(...y),
            x2: Math.max(...x),
            y2: Math.max(...y),
          },
        });

        layout2.run();
      });
    });
    // TODO
    layout1.run();

    cy.on("click", "node", (event) => {
      console.log(event.target.position());
    });

    /**/

    /** /
    cy.layout({
      name: "cise",
      // @ts-ignore
      randomize: false,
      clusters: [
        ["n8", "n9", "n10", "n11", "n12", "n13", "n14", "n15", "n16", "n17"],
        ["n35", "n36", "n37", "n38", "n39", "n40", "n41", "n42", "n43", "n44"],
      ],
    }).run();
    /**/

    /** /
    cy.layout({
      name: "euler",
      randomize: false,
      animate: false,
      // maxIterations: 1500,
      // Gravity
      // negative: repel
      // positive: attract
      gravity: -2,
      // springCoeff: (edge) => {
      //   const { source, target } = edge.data();
      //   const min = Math.min(
      //     edgeWeights.get(source)!,
      //     edgeWeights.get(target)!
      //   );

      //   switch (min) {
      //     case 1:
      //     case 2:
      //       return 0.001;
      //     case 3:
      //     case 4:
      //       return 0.0007;
      //     case 5:
      //     case 6:
      //       return 0.0005;
      //   }

      //   return 0.0008;
      // },
      springLength: (edge) => {
        const { source, target } = edge.data();
        const min = Math.min(
          edgeWeights.get(source)!,
          edgeWeights.get(target)!
        );
        // console.log(edge.id(), max - min);
        edge.data("label", min);

        switch (min) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 60;
        }

        if (min < 8) {
          return 200;
        }

        return 250;
      },
      mass: (node) => {
        const weight = nodeWeights.get(node.id());

        switch (weight) {
          case 1:
          case 2:
            return 20;
          case 3:
          case 4:
            return 12;
          case 5:
          case 6:
            return 8;
          case 7:
          case 8:
            return 6;
        }

        return 2;
      },
    } as EulerLayoutOptions).run();
    /**/

    // });

    console.timeEnd("render");
  }, [ref.current]);

  return <div ref={ref} style={{ height, width }} />;
  // return (
  //   <svg
  //     className="graph"
  //     height={height}
  //     width={width}
  //     viewBox={`0 0 ${height} ${width}`}
  //   >
  //     {cy.nodes().map((node) => {
  //       const id = node.id();
  //       const { x, y } = node.position();
  //       return (
  //         <g key={id} className="graph-node">
  //           <text x={x} y={y}>
  //             {id}
  //           </text>
  //         </g>
  //       );
  //     })}
  //   </svg>
  // );
};
