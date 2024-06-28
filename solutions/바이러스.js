const INPUT_PATH = "./inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, M, ...list] = inputArguments;
  let connectedList = list.map(e => e.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);

  const network = {};
  const searchList = [1];
  let count = 0;
  const searchMap = {};

  for (let i = 1; i <= N; i++) {
    searchMap[i] = false;
  }

  for (const [computerA, computerB] of connectedList) {
    if (network[computerA]) {
        network[computerA].push(computerB);
    } else {
        network[computerA] = [computerB];
    }
  }

  while (searchList.length > 0) {
    const target = searchList.shift();

    if (network[target]) {
      for (const child of network[target]) {
        if (searchMap[child]) {
          continue;
        } else {
          count++;
          searchMap[child] = true;
          
          searchList.push(child);
        }
      }
    }

    count++;
    searchMap[target] = true;
  }

  return count;
}

console.log(solution(input));
