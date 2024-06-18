const INPUT_PATH = "inputs/numberOfRelatives.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const [A, B] = input.shift().split(" ").map(Number);
const numberOfChildren = Number(input.shift());
const relationships = input.map((arr) => arr.split(" ").map(Number));
const tree = {};

console.log(relationships);
relationships.forEach(([parent, child ]) => {
  if (tree[parent]) {
    const parentTree = tree[parent];
    parentTree[child] = {};

    return;
  }

  tree[parent] = {[child]: {}};
  console.log(tree);
});

console.log(tree);
