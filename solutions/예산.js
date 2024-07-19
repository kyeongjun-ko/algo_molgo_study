const INPUT_PATH = "./inputs/예산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [states, request ,budget] = inputArguments;

  const requestList = request.split(" ").map(Number).sort((a, b) => a - b);

  const requestSum = requestList.reduce((a, b) => a + b);

  if (requestSum < Number(budget)) {
    return Math.max(...requestList);
  }

  let start = 0;
  let end = requestList[states - 1];
  let result, sum;

  while (start <= end) {
    sum = 0;

    const mid = Math.floor((start + end) / 2);
    
    for (let i = 0; i < states; i++) {
      sum += Math.min(requestList[i], mid);
    }

    if (sum <= budget) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
