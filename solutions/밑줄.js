const INPUT_PATH = "./inputs/밑줄.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [number, ...rest] = inputArguments;
  const [N, M] = number.split(" ").map(Number);

  const wordList = [];
  const dashMap = {};

  const concatWordAndDash = () => {
    let result = "";

    for (const word of wordList) {
      result = result ? result + "_".repeat(dashMap[word])+ word : word;
    }

    return result;
  };

  const addDash = () => {
    const wordLength = wordList.join("").length;
    const dashLength = Object.values(dashMap).reduce((a, b) => a + b, 0);
    let totalLength = wordLength + dashLength;

    while (totalLength !== M) {
      const dashKeys = Object.keys(dashMap).sort((a, b) => b.charCodeAt() - a.charCodeAt());

      for (const key of dashKeys) {
        dashMap[key]++;
        totalLength++;
  
        if (totalLength === M) {
          return concatWordAndDash();
        }
      }
    }
  };


  for (let i = 0; i < N; i++) {
    const word = rest[i];

    wordList.push(word);

    if (i > 0) {
      dashMap[word] ? dashMap[word]++ : dashMap[word] = 1;
    }
    
    const wordLength = wordList.join("").length;
    const dashLength = Object.values(dashMap).reduce((a, b) => a + b, 0);
    const totalLength = wordLength + dashLength;
    
    if (totalLength > M) {
      wordList.pop();
      delete dashMap[word];

      return addDash();
    }
    
    if (totalLength === M) {
      return concatWordAndDash();
    } else {
      continue;
    }
  }

  return addDash();
}

console.log(solution(input));
