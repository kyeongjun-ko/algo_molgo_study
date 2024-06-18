const INPUT_PATH = "inputs/numberSquare.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr =  input.map((row) => row.split("").map(Number));

let answer = 1;

arr.forEach((row, xIndex) => {
  row.forEach((number, yIndex) => {
    const maxNumber = Math.min(N - 1 - xIndex, M - 1 - yIndex);

    for (i = 1; i <= maxNumber; i += 1) {
      if (
        arr[xIndex + i][yIndex] !== number ||
        arr[xIndex][yIndex + i] !== number ||
        arr[xIndex + i][yIndex + i] !== number
      ) continue;

      const sum = (i + 1) ** 2;

      if (answer < sum) answer = sum;
    }
  });
});

console.log(answer);
