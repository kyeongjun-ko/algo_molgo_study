const INPUT_PATH = "inputs/josephus_problem.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const circle = Array.from({ length: N }, (_, index) => index + 1);
let answer = "<";
let count = 0;
let circleIndex = 0;
let isAnswerStarted = false;
let usedIndex = [];

while (circle.length !== 0) {
  count += 1;

  if (circleIndex === circle.length) {
    circleIndex = 0;
  }

  if (count === K) {
    if (!isAnswerStarted) {
      answer += circle[circleIndex];
      isAnswerStarted = true;
    } else {
      answer += `, ${circle[circleIndex]}`;
    }

     usedIndex.push(circleIndex);
    circle.splice(circleIndex, 1);
    count = 0;

     continue;
  }

  circleIndex += 1;
}

answer += ">"

console.log(answer);
