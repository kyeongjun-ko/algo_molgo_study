const INPUT_PATH = "./inputs/가장_긴_증가하는_부분_수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 각인자의 배열을 순회하면서 큰수의 경우 length 를 1씩 증가시키고
// 각 인자마다 수열의 갯수를 구해서 그중 큰 수를 반환한다.


function solution(inputArguments) {
  const [N, list] = inputArguments;
  const numberList = list.split(" ").map(Number);
  
  const result = [];
  let increaseLength = 1;
  let current;

  for (let i = 0; i < N - 1; i++) {
    current = numberList[i];

    for (let j = i + 1; j < N; j++) {
      if (current < numberList[j]) {
        increaseLength++;
        current = numberList[j];
      }
    }

    result.push(increaseLength);

    increaseLength = 1;
  }

  return Math.max(...result);
}

console.log(solution(input));
