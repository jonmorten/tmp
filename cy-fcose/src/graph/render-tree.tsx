import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";
import dagre, { DagreLayoutOptions } from "cytoscape-dagre";
// import { DraggableCore } from "react-draggable";

cytoscape.use(dagre);

// import { data } from "../data/dagre1";
import { data } from "../data/dagre2";

type Props = {
  height: number;
  width: number;
};

export const RenderTree = ({ height, width }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    console.clear();
    console.time("render");

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

    const layout1 = cy.layout({
      name: "dagre",
      rankSep: 120,
    } as DagreLayoutOptions);

    layout1.run();

    console.timeEnd("render");
  }, [ref.current]);

  return <div ref={ref} style={{ height, width }} />;
};
