export type InputNode = {
  group: "nodes";
  data: {
    id: string;
    label?: string;
  };
};

export type InputEdge = {
  group: "edges";
  data: {
    id: string;
    source: string;
    target: string;
  };
};

export type InputData = {
  elements: (InputNode | InputEdge)[];
};
