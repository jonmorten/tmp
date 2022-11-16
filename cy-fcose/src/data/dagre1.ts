import { InputData } from "../types";

const nodes = [
  ["n0"],
  ["n1"],
  ["n2"],
  ["n3"],
  ["n4"],
  ["n5"],
  ["n6"],
  ["n7"],
  ["n8"],
  ["n9"],
  ["n10"],
  ["n11"],
  ["n12"],
  ["n13"],
  ["n14"],
  ["n15"],
  ["n16"],
  ["n17"],
].map(([id]) => ({ id, label: id }));

const edges = [
  // (root above level 1)

  // lvl 1
  ["n0", "n1"],
  ["n0", "n1"],
  ["n0", "n1"],
  ["n0", "n1"],
  ["n0", "n1"],
  ["n0", "n1"],

  // lvl 2
  ["n1", "n2"],
  ["n1", "n3"],
  ["n1", "n4"],
  ["n1", "n5"],
  ["n1", "n6"],
  ["n1", "n7"],
  ["n1", "n8"],

  // lvl 3
  ["n2", "n9"],
  ["n2", "n10"],
  ["n2", "n11"],
  ["n2", "n12"],
  ["n2", "n13"],
  ["n2", "n14"],
  ["n2", "n15"],
  ["n2", "n16"],
  ["n2", "n17"],
].map(([source, target], i) => ({ id: `e${i}`, source, target }));

export const data: InputData = {
  elements: [
    ...nodes.map((node) => ({ group: "nodes" as const, data: node })),
    ...edges.map((edge) => ({ group: "edges" as const, data: edge })),
  ],
};
