const INPUT_PATH = "./inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [number, time] = inputArguments;
  let totalTime = 0;

  const poeple = Number(number);
  const sortedTimeList = time.split(" ").map(Number).sort();
  
  sortedTimeList.reduce((acc, cur) => {
    totalTime += acc + cur;

    return acc + cur;
  }, 0);



  let sum = 0;

  for (let i = 0; i < poeple; i++) {
    // sum += sortedTimeList[i] * (N - i);
    sum += sum + sortedTimeList[i];
  }

  console.log("sum", sum)


  return totalTime;
}

console.log(solution(input));
