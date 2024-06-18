const INPUT_PATH = "./inputs/숫자_정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [size, ...numbersquare] = inputArguments;
  const [N, M] = size.split(" ").map(Number);
  const nestedList = numbersquare.map(e => [...e].map(Number));

  const squareSizeList = [];

  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      let current = nestedList[n][m];

      for (let j = 1; j + n < N && j + m < M; j++) {
        if (
          current === nestedList[n + j][m] &&
          current === nestedList[n][m + j] &&
          current === nestedList[n + j][m + j]
          ) {
          squareSizeList.push((1 + j) ** 2);
        }
      }
    }
  }

  if (squareSizeList.length === 0) {
    return 1;
  }
  return Math.max(...squareSizeList);
}

console.log(solution(input));
