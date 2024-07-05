const INPUT_PATH = "./inputs/시리얼_번호.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [guitarNumber, ...list] = inputArguments;

  const isNumber = (string) => !isNaN(string);

  const getNumberSum = (string) => {
    let maxNumberSum = 0;

    for (let i = 0; i < guitarNumber; i++) {
      let numberSum = 0;

      if (isNumber(string[i])) {
        numberSum += Number(string[i]);

        for (let j = i + 1; j < guitarNumber; j++) {
          if (isNumber(string[j])) {
            numberSum += Number(string[j]);
          } else {

            break;
          }
        }

        if (maxNumberSum < numberSum) {
          maxNumberSum = numberSum;
        }
      }
    }

    return maxNumberSum;
  }


  const sortString = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
      if (str1.charCodeAt(i) === str2.charCodeAt(i)) {
        continue;
      }
      
      if (str1.charCodeAt(i) < str2.charCodeAt(i)) {
        return -1
      }
      if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
        return 1;
      }
    }

    return 0;
  }

  list.sort((a, b) => a.length - b.length || getNumberSum(a) - getNumberSum(b) || sortString(a, b));

  return list.join("\n");
}

console.log(solution(input));
