import { describe, expect, it } from "vitest";

import { tarjan } from "./tarjan3";

describe("tarjan", () => {
  it("case 1", () => {
    const edges = [
      ["n1", "n0"],
      ["n0", "n2"],
      ["n2", "n1"],
      ["n0", "n3"],
      ["n3", "n4"],
    ];
    const nodes = ["n0", "n1", "n2", "n3", "n4"];

    const result = [["n4"], ["n3"], ["n1", "n2", "n0"]];

    expect(tarjan(nodes, edges)).toEqual(result);
  });

  it("case 2", () => {
    const edges = [
      ["n0", "n1"],
      ["n1", "n2"],
      ["n2", "n3"],
    ];
    const nodes = ["n0", "n1", "n2", "n3"];

    const result = [["n3"], ["n2"], ["n1"], ["n0"]];

    expect(tarjan(nodes, edges)).toEqual(result);
  });

  it("case 3", () => {
    const edges = [
      ["n0", "n1"],
      ["n1", "n2"],
      ["n2", "n0"],
      ["n1", "n3"],
      ["n1", "n4"],
      ["n1", "n6"],
      ["n3", "n5"],
      ["n4", "n5"],
    ];
    const nodes = ["n0", "n1", "n2", "n3", "n4", "n5", "n6"];

    const result = [["n5"], ["n3"], ["n4"], ["n6"], ["n2", "n1", "n0"]];

    expect(tarjan(nodes, edges)).toEqual(result);
  });

  it("case 4", () => {
    const edges = [
      ["n0", "n1"],
      ["n0", "n3"],
      ["n1", "n2"],
      ["n1", "n4"],
      ["n2", "n0"],
      ["n2", "n6"],
      ["n3", "n2"],
      ["n4", "n5"],
      ["n4", "n6"],
      ["n5", "n6"],
      ["n5", "n7"],
      ["n5", "n8"],
      ["n5", "n9"],
      ["n6", "n4"],
      ["n7", "n9"],
      ["n8", "n9"],
      ["n9", "n8"],
    ];
    const nodes = [
      "n0",
      "n1",
      "n2",
      "n3",
      "n4",
      "n5",
      "n6",
      "n7",
      "n8",
      "n9",
      "n10",
    ];

    const result = [
      ["n8", "n9"],
      ["n7"],
      ["n5", "n4", "n6"],
      ["n3", "n2", "n1", "n0"],
      ["n10"],
    ];

    expect(tarjan(nodes, edges)).toEqual(result);
  });

  it("case 5", () => {
    const edges = [
      ["n0", "n1"],
      ["n1", "n2"],
      ["n2", "n3"],
      ["n2", "n4"],
      ["n3", "n0"],
      ["n4", "n2"],
    ];
    const nodes = ["n0", "n1", "n2", "n3", "n4"];

    const result = [["n4", "n3", "n2", "n1", "n0"]];

    expect(tarjan(nodes, edges)).toEqual(result);
  });
});
