export class Vertex {
  public readonly name;
  public successors: Vertex[];
  public index = -1;
  public lowLink = -1;
  public onStack = false;
  public visited = false;

  public constructor(name: string, successors?: Vertex[]) {
    this.name = name;
    this.successors = successors || [];
    this.reset();
  }

  public addSuccessors(successor: Vertex) {
    this.successors.push(successor);
  }

  public reset() {
    this.index = -1;
    this.lowLink = -1;
    this.onStack = false;
    this.visited = false;
  }
}

export const getStronglyConnectedComponents = (
  vertices: Vertex[]
): Vertex[][] => {
  const V = vertices;

  let index = 0;
  const stack: Vertex[] = [];
  const components: Vertex[][] = [];

  const stronglyConnect = (v: Vertex): void => {
    v.index = index;
    v.lowLink = index;
    index++;
    stack.push(v);
    v.onStack = true;

    v.successors.forEach((w) => {
      if (w.index < 0) {
        stronglyConnect(w);
        v.lowLink = Math.min(v.lowLink, w.lowLink);
      } else if (w.onStack) {
        v.lowLink = Math.min(v.lowLink, w.index);
      }
    });

    if (v.lowLink === v.index) {
      const scc = [];
      let w;
      do {
        w = stack.pop();
        if (!w) {
          break;
        }

        w.onStack = false;
        scc.push(w);
      } while (w !== v);

      components.push(scc);
    }
  };

  V.forEach(function (v) {
    if (v.index < 0) {
      stronglyConnect(v);
    }
  });

  return components;
};
