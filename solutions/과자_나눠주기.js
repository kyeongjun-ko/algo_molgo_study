const INPUT_PATH = "./inputs/과자_나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, list] = inputArguments;

  const [children, _] = N.split(" ").map(Number);
  let cookieLangthList = list.split(" ").map(Number).sort((a, b) => b - a);
  
  const spliceCookie = (list) => {
    const copyList = [...list];
    
    const maxNumber = Math.max(...copyList);
    const halfMax = Math.floor(maxNumber / 2);
    
    copyList.push(halfMax);
    
    return copyList;  
  }

  if (cookieLangthList.length < children) {
    while (cookieLangthList.length === children) {
      cookieLangthList = spliceCookie(cookieLangthList);
    }

    if (cookieLangthList.length < children) {
      return 0;
    }
  }

  for (let i = 0; i < cookieLangthList.length; i++) {
    const maxNumberList = cookieLangthList.slice(i, i + children);

    return Math.min(...maxNumberList);
  }
}

console.log(solution(input));
