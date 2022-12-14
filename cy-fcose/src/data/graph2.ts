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
  ["n18"],
  ["n19"],
  ["n20"],
  ["n21"],
  ["n22"],
  ["n23"],
  ["n24"],
  ["n25"],
  ["n26"],
  ["n27"],
  ["n28"],
  ["n29"],
  ["n30"],
  ["n31"],
  ["n32"],
  ["n33"],
  ["n34"],
  ["n35"],
  ["n36"],
  ["n37"],
  ["n38"],
  ["n39"],
  ["n40"],
  ["n41"],
  ["n42"],
  ["n43"],
  ["n44"],
  ["n45"],
  ["n46"],
  ["n47"],
  ["n48"],
  ["n49"],
  ["n50"],
  ["n51"],
  ["n52"],
  ["n53"],
  ["n54"],
  ["n55"],
  ["n56"],
  ["n57"],
  ["n58"],
  ["n59"],
].map(([id]) => ({ id, label: id }));

const edges = [
  ["n0", "n1"],

  ["n1", "n2"],

  ["n2", "n3"],
  ["n2", "n4"],

  ["n4", "n5"],
  ["n4", "n6"],
  ["n4", "n7"],
  ["n4", "n8"],
  ["n4", "n9"],
  ["n4", "n10"],
  ["n4", "n11"],
  ["n4", "n12"],

  ["n5", "n6"],
  ["n5", "n7"],
  ["n5", "n8"],
  ["n5", "n9"],
  ["n5", "n10"],
  ["n5", "n11"],
  ["n5", "n12"],

  ["n6", "n7"],
  ["n6", "n8"],
  ["n6", "n9"],
  ["n6", "n10"],
  ["n6", "n11"],
  ["n6", "n12"],

  ["n7", "n8"],
  ["n7", "n9"],
  ["n7", "n10"],
  ["n7", "n11"],
  ["n7", "n12"],

  ["n8", "n9"],
  ["n8", "n10"],
  ["n8", "n11"],
  ["n8", "n12"],

  ["n9", "n10"],
  ["n9", "n11"],
  ["n9", "n12"],

  ["n10", "n11"],
  ["n10", "n12"],

  ["n11", "n12"],

  ["n12", "n13"],
  ["n12", "n14"],

  ["n13", "n15"],
  ["n13", "n16"],
  ["n13", "n17"],
  ["n13", "n18"],
  ["n13", "n19"],
  ["n13", "n20"],
  ["n13", "n23"],
  ["n13", "n24"],
  ["n13", "n26"],
  ["n13", "n27"],
  ["n13", "n29"],
  ["n13", "n30"],

  ["n14", "n16"],
  ["n14", "n17"],
  ["n14", "n18"],
  ["n14", "n19"],
  ["n14", "n20"],
  ["n14", "n22"],
  ["n14", "n23"],
  ["n14", "n24"],
  ["n14", "n26"],
  ["n14", "n27"],
  ["n14", "n29"],
  ["n14", "n30"],

  ["n18", "n19"],
  ["n19", "n18"],

  ["n20", "n21"],

  ["n24", "n25"],

  ["n26", "n34"],
  ["n26", "n35"],

  ["n27", "n28"],

  ["n29", "n32"],
  ["n29", "n33"],

  ["n31", "n18"],
  ["n31", "n19"],

  ["n30", "n36"],
  ["n30", "n37"],
  ["n30", "n38"],
  ["n30", "n39"],
  ["n30", "n40"],
  ["n30", "n41"],

  ["n36", "n37"],
  ["n36", "n38"],
  ["n36", "n39"],
  ["n36", "n40"],
  ["n36", "n41"],

  ["n37", "n38"],
  ["n37", "n39"],
  ["n37", "n40"],
  ["n37", "n41"],

  ["n38", "n39"],
  ["n38", "n40"],
  ["n38", "n41"],

  ["n39", "n40"],
  ["n39", "n41"],

  ["n40", "n41"],

  ["n23", "n42"],
  ["n23", "n43"],
  ["n23", "n44"],
  ["n23", "n45"],
  ["n23", "n46"],
  ["n23", "n47"],
  ["n23", "n48"],
  ["n23", "n49"],
  ["n23", "n50"],
  ["n23", "n51"],
  ["n23", "n52"],
  ["n23", "n53"],
  ["n23", "n54"],
  ["n23", "n55"],

  ["n42", "n43"],
  ["n42", "n44"],
  ["n42", "n45"],
  ["n42", "n46"],
  ["n42", "n47"],
  ["n42", "n48"],
  ["n42", "n49"],
  ["n42", "n50"],
  ["n42", "n51"],
  ["n42", "n52"],
  ["n42", "n53"],
  ["n42", "n54"],
  ["n42", "n55"],

  ["n43", "n44"],
  ["n43", "n45"],
  ["n43", "n46"],
  ["n43", "n47"],
  ["n43", "n48"],
  ["n43", "n49"],
  ["n43", "n50"],
  ["n43", "n51"],
  ["n43", "n52"],
  ["n43", "n53"],
  ["n43", "n54"],
  ["n43", "n55"],

  ["n44", "n45"],
  ["n44", "n46"],
  ["n44", "n47"],
  ["n44", "n48"],
  ["n44", "n49"],
  ["n44", "n50"],
  ["n44", "n51"],
  ["n44", "n52"],
  ["n44", "n53"],
  ["n44", "n54"],
  ["n44", "n55"],

  ["n45", "n46"],
  ["n45", "n47"],
  ["n45", "n48"],
  ["n45", "n49"],
  ["n45", "n50"],
  ["n45", "n51"],
  ["n45", "n52"],
  ["n45", "n53"],
  ["n45", "n54"],
  ["n45", "n55"],

  ["n46", "n47"],
  ["n46", "n48"],
  ["n46", "n49"],
  ["n46", "n50"],
  ["n46", "n51"],
  ["n46", "n52"],
  ["n46", "n53"],
  ["n46", "n54"],
  ["n46", "n55"],

  ["n47", "n48"],
  ["n47", "n49"],
  ["n47", "n50"],
  ["n47", "n51"],
  ["n47", "n52"],
  ["n47", "n53"],
  ["n47", "n54"],
  ["n47", "n55"],

  ["n48", "n49"],
  ["n48", "n50"],
  ["n48", "n51"],
  ["n48", "n52"],
  ["n48", "n53"],
  ["n48", "n54"],
  ["n48", "n55"],

  ["n49", "n50"],
  ["n49", "n51"],
  ["n49", "n52"],
  ["n49", "n53"],
  ["n49", "n54"],
  ["n49", "n55"],

  ["n50", "n51"],
  ["n50", "n52"],
  ["n50", "n53"],
  ["n50", "n54"],
  ["n50", "n55"],

  ["n51", "n52"],
  ["n51", "n53"],
  ["n51", "n54"],
  ["n51", "n55"],

  ["n52", "n53"],
  ["n52", "n54"],
  ["n52", "n55"],

  ["n53", "n54"],
  ["n53", "n55"],

  ["n54", "n55"],

  ["n51", "n56"],

  ["n56", "n57"],

  ["n57", "n58"],

  ["n58", "n59"],
].map(([source, target], i) => ({ id: `e${i}`, source, target }));

export const data: InputData = {
  elements: [
    ...nodes.map((node) => ({ group: "nodes" as const, data: node })),
    ...edges.map((edge) => ({ group: "edges" as const, data: edge })),
  ],
};

export const rawEdges: Iterable<[number, number]> = [
  [0, 1],

  [1, 2],

  [2, 3],
  [2, 4],

  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [4, 9],
  [4, 10],
  [4, 11],
  [4, 12],

  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
  [5, 10],
  [5, 11],
  [5, 12],

  [6, 7],
  [6, 8],
  [6, 9],
  [6, 10],
  [6, 11],
  [6, 12],

  [7, 8],
  [7, 9],
  [7, 10],
  [7, 11],
  [7, 12],

  [8, 9],
  [8, 10],
  [8, 11],
  [8, 12],

  [9, 10],
  [9, 11],
  [9, 12],

  [10, 11],
  [10, 12],

  [11, 12],

  [12, 13],
  [12, 14],

  [13, 15],
  [13, 16],
  [13, 17],
  [13, 18],
  [13, 19],
  [13, 20],
  [13, 23],
  [13, 24],
  [13, 26],
  [13, 27],
  [13, 29],
  [13, 30],

  [14, 16],
  [14, 17],
  [14, 18],
  [14, 19],
  [14, 20],
  [14, 22],
  [14, 23],
  [14, 24],
  [14, 26],
  [14, 27],
  [14, 29],
  [14, 30],

  [18, 19],
  [19, 18],

  [20, 21],

  [24, 25],

  [26, 34],
  [26, 35],

  [27, 28],

  [29, 32],
  [29, 33],

  [31, 18],
  [31, 19],

  [30, 36],
  [30, 37],
  [30, 38],
  [30, 39],
  [30, 40],
  [30, 41],

  [36, 37],
  [36, 38],
  [36, 39],
  [36, 40],
  [36, 41],

  [37, 38],
  [37, 39],
  [37, 40],
  [37, 41],

  [38, 39],
  [38, 40],
  [38, 41],

  [39, 40],
  [39, 41],

  [40, 41],

  [23, 42],
  [23, 43],
  [23, 44],
  [23, 45],
  [23, 46],
  [23, 47],
  [23, 48],
  [23, 49],
  [23, 50],
  [23, 51],
  [23, 52],
  [23, 53],
  [23, 54],
  [23, 55],

  [42, 43],
  [42, 44],
  [42, 45],
  [42, 46],
  [42, 47],
  [42, 48],
  [42, 49],
  [42, 50],
  [42, 51],
  [42, 52],
  [42, 53],
  [42, 54],
  [42, 55],

  [43, 44],
  [43, 45],
  [43, 46],
  [43, 47],
  [43, 48],
  [43, 49],
  [43, 50],
  [43, 51],
  [43, 52],
  [43, 53],
  [43, 54],
  [43, 55],

  [44, 45],
  [44, 46],
  [44, 47],
  [44, 48],
  [44, 49],
  [44, 50],
  [44, 51],
  [44, 52],
  [44, 53],
  [44, 54],
  [44, 55],

  [45, 46],
  [45, 47],
  [45, 48],
  [45, 49],
  [45, 50],
  [45, 51],
  [45, 52],
  [45, 53],
  [45, 54],
  [45, 55],

  [46, 47],
  [46, 48],
  [46, 49],
  [46, 50],
  [46, 51],
  [46, 52],
  [46, 53],
  [46, 54],
  [46, 55],

  [47, 48],
  [47, 49],
  [47, 50],
  [47, 51],
  [47, 52],
  [47, 53],
  [47, 54],
  [47, 55],

  [48, 49],
  [48, 50],
  [48, 51],
  [48, 52],
  [48, 53],
  [48, 54],
  [48, 55],

  [49, 50],
  [49, 51],
  [49, 52],
  [49, 53],
  [49, 54],
  [49, 55],

  [50, 51],
  [50, 52],
  [50, 53],
  [50, 54],
  [50, 55],

  [51, 52],
  [51, 53],
  [51, 54],
  [51, 55],

  [52, 53],
  [52, 54],
  [52, 55],

  [53, 54],
  [53, 55],

  [54, 55],

  [51, 56],

  [56, 57],

  [57, 58],

  [58, 59],
];
