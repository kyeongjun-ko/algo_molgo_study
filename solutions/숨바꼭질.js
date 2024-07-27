const INPUT_PATH = "./inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, K] = inputArguments[0].split(" ").map(Number);

  let time = 0;
  const searchList =[[N, time]]

  while (searchList.length > 0) {
    const [current, accTime] = searchList.pop();

    const leftMove = current - 1;
    const rightMove = current + 1;
    const doubleMove = current * 2;

    if (current === K) {
      return accTime;
    }

    if (current < K) {
      searchList.push([rightMove, accTime + 1]);
      searchList.push([doubleMove, accTime + 1]);
    } else {
      searchList.push([leftMove, accTime + 1]);
    }
  }

  return time;
}

console.log(solution(input));
