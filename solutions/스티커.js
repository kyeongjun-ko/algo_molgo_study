const INPUT_PATH = "./inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [testNumber, ...list] = inputArguments;
  const stickerList = list.map(e => e.split(" ").map(Number))
  
  let sum;

  for (let i = 0; i < testCase; i++) {
  }

  return sum;
}

console.log(solution(input));
