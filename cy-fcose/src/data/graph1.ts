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
  ["n1", "n3"],

  ["n2", "n5"],
  ["n2", "n3"],

  ["n3", "n4"],

  ["n5", "n6"],

  ["n6", "n7"],
  ["n6", "n8"],

  ["n8", "n9"],
  ["n8", "n10"],
  ["n8", "n11"],
  ["n8", "n12"],
  ["n8", "n13"],
  ["n8", "n14"],
  ["n8", "n15"],
  ["n8", "n16"],
  ["n8", "n17"],

  ["n9", "n10"],
  ["n9", "n11"],
  ["n9", "n12"],
  ["n9", "n13"],
  ["n9", "n14"],
  ["n9", "n15"],
  ["n9", "n16"],
  ["n9", "n17"],

  ["n10", "n11"],
  ["n10", "n12"],
  ["n10", "n13"],
  ["n10", "n14"],
  ["n10", "n15"],
  ["n10", "n16"],
  ["n10", "n17"],

  ["n11", "n12"],
  ["n11", "n13"],
  ["n11", "n14"],
  ["n11", "n15"],
  ["n11", "n16"],
  ["n11", "n17"],

  ["n12", "n13"],
  ["n12", "n14"],
  ["n12", "n15"],
  ["n12", "n16"],
  ["n12", "n17"],

  ["n13", "n14"],
  ["n13", "n15"],
  ["n13", "n16"],
  ["n13", "n17"],

  ["n14", "n15"],
  ["n14", "n16"],
  ["n14", "n17"],

  ["n15", "n16"],
  ["n15", "n17"],

  ["n16", "n17"],

  ["n17", "n18"],
  ["n17", "n19"],

  ["n18", "n19"],
  ["n18", "n20"],
  ["n18", "n22"],
  ["n18", "n23"],
  ["n18", "n24"],
  ["n18", "n25"],
  ["n18", "n26"],
  ["n18", "n27"],
  ["n18", "n28"],
  ["n18", "n28"],
  ["n18", "n30"],

  ["n19", "n18"],
  ["n19", "n21"],
  ["n19", "n22"],
  ["n19", "n23"],
  ["n19", "n24"],
  ["n19", "n25"],
  ["n19", "n26"],
  ["n19", "n27"],
  ["n19", "n28"],
  ["n19", "n28"],
  ["n19", "n30"],

  ["n27", "n29"],
  ["n29", "n27"],

  ["n30", "n31"],
  ["n30", "n32"],
  ["n30", "n33"],
  ["n30", "n34"],

  ["n31", "n32"],
  ["n31", "n33"],
  ["n31", "n34"],

  ["n32", "n33"],
  ["n32", "n34"],

  ["n33", "n34"],

  ["n18", "n35"],
  ["n19", "n35"],

  ["n35", "n36"],
  ["n35", "n37"],
  ["n35", "n38"],
  ["n35", "n39"],
  ["n35", "n40"],
  ["n35", "n41"],
  ["n35", "n42"],
  ["n35", "n43"],
  ["n35", "n44"],

  ["n36", "n37"],
  ["n36", "n38"],
  ["n36", "n39"],
  ["n36", "n40"],
  ["n36", "n41"],
  ["n36", "n42"],
  ["n36", "n43"],
  ["n36", "n44"],

  ["n37", "n38"],
  ["n37", "n39"],
  ["n37", "n40"],
  ["n37", "n41"],
  ["n37", "n42"],
  ["n37", "n43"],
  ["n37", "n44"],

  ["n38", "n39"],
  ["n38", "n40"],
  ["n38", "n41"],
  ["n38", "n42"],
  ["n38", "n43"],
  ["n38", "n44"],

  ["n39", "n40"],
  ["n39", "n41"],
  ["n39", "n42"],
  ["n39", "n43"],
  ["n39", "n44"],

  ["n40", "n41"],
  ["n40", "n42"],
  ["n40", "n43"],
  ["n40", "n44"],

  ["n41", "n42"],
  ["n41", "n43"],
  ["n41", "n44"],

  ["n42", "n43"],
  ["n42", "n44"],

  ["n43", "n44"],

  ["n36", "n45"],
  ["n36", "n46"],

  ["n46", "n47"],
  ["n46", "n48"],
  ["n46", "n49"],

  ["n47", "n48"],
  ["n47", "n49"],

  ["n48", "n49"],

  ["n43", "n50"],

  ["n44", "n51"],

  ["n51", "n52"],
  ["n51", "n53"],
  ["n51", "n54"],

  ["n53", "n55"],

  ["n55", "n56"],

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
  [1, 3],

  [2, 5],
  [2, 3],

  [3, 4],

  [5, 6],

  [6, 7],
  [6, 8],

  [8, 9],
  [8, 10],
  [8, 11],
  [8, 12],
  [8, 13],
  [8, 14],
  [8, 15],
  [8, 16],
  [8, 17],

  [9, 10],
  [9, 11],
  [9, 12],
  [9, 13],
  [9, 14],
  [9, 15],
  [9, 16],
  [9, 17],

  [10, 11],
  [10, 12],
  [10, 13],
  [10, 14],
  [10, 15],
  [10, 16],
  [10, 17],

  [11, 12],
  [11, 13],
  [11, 14],
  [11, 15],
  [11, 16],
  [11, 17],

  [12, 13],
  [12, 14],
  [12, 15],
  [12, 16],
  [12, 17],

  [13, 14],
  [13, 15],
  [13, 16],
  [13, 17],

  [14, 15],
  [14, 16],
  [14, 17],

  [15, 16],
  [15, 17],

  [16, 17],

  [17, 18],
  [17, 19],

  [18, 19],
  [18, 20],
  [18, 22],
  [18, 23],
  [18, 24],
  [18, 25],
  [18, 26],
  [18, 27],
  [18, 28],
  [18, 28],
  [18, 30],

  [19, 18],
  [19, 21],
  [19, 22],
  [19, 23],
  [19, 24],
  [19, 25],
  [19, 26],
  [19, 27],
  [19, 28],
  [19, 28],
  [19, 30],

  [27, 29],
  [29, 27],

  [30, 31],
  [30, 32],
  [30, 33],
  [30, 34],

  [31, 32],
  [31, 33],
  [31, 34],

  [32, 33],
  [32, 34],

  [33, 34],

  [18, 35],
  [19, 35],

  [35, 36],
  [35, 37],
  [35, 38],
  [35, 39],
  [35, 40],
  [35, 41],
  [35, 42],
  [35, 43],
  [35, 44],

  [36, 37],
  [36, 38],
  [36, 39],
  [36, 40],
  [36, 41],
  [36, 42],
  [36, 43],
  [36, 44],

  [37, 38],
  [37, 39],
  [37, 40],
  [37, 41],
  [37, 42],
  [37, 43],
  [37, 44],

  [38, 39],
  [38, 40],
  [38, 41],
  [38, 42],
  [38, 43],
  [38, 44],

  [39, 40],
  [39, 41],
  [39, 42],
  [39, 43],
  [39, 44],

  [40, 41],
  [40, 42],
  [40, 43],
  [40, 44],

  [41, 42],
  [41, 43],
  [41, 44],

  [42, 43],
  [42, 44],

  [43, 44],

  [36, 45],
  [36, 46],

  [46, 47],
  [46, 48],
  [46, 49],

  [47, 48],
  [47, 49],

  [48, 49],

  [43, 50],

  [44, 51],

  [51, 52],
  [51, 53],
  [51, 54],

  [53, 55],

  [55, 56],

  [56, 57],

  [57, 58],

  [58, 59],
];