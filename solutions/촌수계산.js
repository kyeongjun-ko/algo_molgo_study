const INPUT_PATH = "./inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [peopleNumber, targetPeople, relateNumber, ...information] = inputArguments;
  const [a, b] = targetPeople.split(" ");
  const parentChild = information.map(e => e.split(" ").map(Number));
  
  const familyMap = {};
  let relatives = -1;

  for (const [parent, child] of parentChild) {
    if (familyMap[parent]) {
      familyMap[parent].push(child);
    } else {
      familyMap[parent] = [child];
    }
  }
  
  for (const parent in familyMap) {
    if (parent === a && familyMap[parent].includes(b)) {
      return 1;
    }

    if (parent === b && familyMap[parent].includes(a)) {
      return 1;
    }

    if (familyMap[parent].includes(a)) {
      if (parent === b) {
        return 1;
      }
      
      for (const x in familyMap) {
        if (familyMap[x].includes(parent)) {
          relatives++;
        }
      }
    }

  }

  // 자기자신이 모든부모의 조상일때까지 부모찾아올라가는 함수 구현
}


console.log(solution(input));