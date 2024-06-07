const INPUT_PATH = "./inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [_, time] = inputArguments;
  let totalTime = 0;

  const sortedTimeList = time.split(" ").map(Number).sort();
  
  sortedTimeList.reduce((acc, cur) => {
    totalTime += acc + cur;

    return acc + cur;
  }, 0);


  return totalTime;
}

console.log(solution(input));
