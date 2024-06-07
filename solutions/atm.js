const INPUT_PATH = "inputs/atm.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const P = input[1].split(" ").map(Number).sort((a, b) => a - b);

let answer = 0;
let lastSum = 0;

for (let i = 0; i < P.length; i++) {
  const currentSum = P[i] + lastSum;
  lastSum = currentSum;
  answer += currentSum;
}

console.log(answer);
