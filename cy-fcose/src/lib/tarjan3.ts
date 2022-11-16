type InputNode = string;
type InputEdge = string[];

const UNDEFINED = -1;
type UNDEFINED = typeof UNDEFINED;

type Vertex = {
  id: string;
  index: UNDEFINED | number;
  lowLink: UNDEFINED | number;
  onStack: boolean;
};

type Edge = {
  v: string;
  w: string;
};

export const tarjan = (inputVertices: InputNode[], inputEdges: InputEdge[]) => {
  const stronglyConnectedComponents: Array<Vertex[]> = [];

  const vertices = new Map<string, Vertex>();
  inputVertices.forEach((vertex) => {
    const id = vertex;
    vertices.set(id, {
      id,
      index: UNDEFINED,
      lowLink: UNDEFINED,
      onStack: false,
    });
  });

  const edges: Edge[] = inputEdges.map(([source, target]) => ({
    v: source,
    w: target,
  }));

  let index = 0;
  const stack: Vertex[] = [];

  const strongConnect = (vertex: Vertex) => {
    vertex.index = index;
    vertex.lowLink = index;
    index = index + 1;
    stack.push(vertex);
    vertex.onStack = true;

    edges.forEach(({ v, w }) => {
      const vv = vertices.get(v)!;
      const ww = vertices.get(w)!;
      if (ww.index === UNDEFINED) {
        strongConnect(ww);
        vv.lowLink = Math.min(vv.lowLink, ww.lowLink);
      } else if (ww.onStack) {
        vv.lowLink = Math.min(vv.lowLink, ww.index);
      }
    });

    if (vertex.lowLink === vertex.index) {
      const scc: Vertex[] = [];
      let w: Vertex | undefined;
      do {
        w = stack.pop();
        if (!w) {
          break;
        }

        w.onStack = false;
        scc.push(w);
      } while (w !== vertex);
      stronglyConnectedComponents.push(scc);
    }
  };

  vertices.forEach((vertex) => {
    if (vertex.index === UNDEFINED) {
      strongConnect(vertex);
    }
  });

  return stronglyConnectedComponents.map((v) => v.map((v2) => v2.id));
};
