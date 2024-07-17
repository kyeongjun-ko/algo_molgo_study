const INPUT_PATH = "./inputs/AtoB.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [A, B] = inputArguments[0].split(" ").map(Number);

  const searchList = [[A, 0]];

  while(searchList.length > 0) {
    const [target, count] = searchList.pop();

    const calculateA = Number(target.toString() + "1");
    const calculateB = target * 2;
    
    if (calculateA === B || calculateB === B) {
      return count + 1;
    }

    if (calculateA < B) {
      searchList.push([calculateA, count + 1]);
    }

    if (calculateB < B) {
      searchList.push([calculateB, count + 1]);
    }
  }

  return -1
}

console.log(solution(input));
