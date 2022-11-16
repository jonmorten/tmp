export class Graph {
  V: number;
  adj: Array<number[]>;
  Time: number;

  constructor(v: number) {
    this.V = v;
    this.adj = new Array(v);

    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }

    this.Time = 0;
  }

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
  }

  scc() {
    const disc: number[] = new Array(this.V);
    const low: number[] = new Array(this.V);
    for (let i = 0; i < this.V; i++) {
      disc[i] = -1;
      low[i] = -1;
    }

    const stackMember = new Map<number, boolean>();
    const st: number[] = [];

    for (let i = 0; i < this.V; i++) {
      if (disc[i] === -1) {
        this.sccUtil(i, low, disc, stackMember, st);
      }
    }
  }

  sccUtil(
    u: number,
    low: number[],
    disc: number[],
    stackMember: Map<number, boolean>,
    st: number[]
  ) {
    disc[u] = this.Time;
    low[u] = this.Time;
    this.Time += 1;
    stackMember.set(u, true);
    st.push(u);

    let n;
    for (const i of this.adj[u]) {
      n = i;

      if (disc[n] === -1) {
        this.sccUtil(n, low, disc, stackMember, st);

        low[u] = Math.min(low[u], low[n]);
      } else if (stackMember.get(n) === true) {
        low[u] = Math.min(low[u], disc[n]);
      }
    }

    let w = -1;
    if (low[u] === disc[u]) {
      console.log("IN");
      while (w !== u) {
        w = st.pop()!;
        // console.log(w);
        stackMember.set(w, false);
      }
      // console.log("OUT");
    }
  }
}

export const run = () => {
  const test = new Graph(5);
  test.addEdge(1, 0);
  test.addEdge(0, 2);
  test.addEdge(2, 1);
  test.addEdge(0, 3);
  test.addEdge(3, 4);
  test.scc();
};
