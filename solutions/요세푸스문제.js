const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ");

function solution(n,k) {
    const numberList = Array.from({length: `${n}`}, (_, index) => index + 1); 
    const result = [];
    let index = 0;
    
    while (numberList.length) {
      index += k - 1;
      
      const normalizedIndex = index % numberList.length;
      const target =numberList.splice(normalizedIndex, 1);
      
      result.push(target[0]);
    }
    
    return result;
}


console.log(solution(n, k));