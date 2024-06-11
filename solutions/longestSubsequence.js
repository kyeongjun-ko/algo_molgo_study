const INPUT_PATH = "inputs/longestSubsequence.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

const dp = new Array(arr.length).fill(1);

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
