const INPUT_PATH = "./inputs/회의실_배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, ...list] = inputArguments;
  const meetingTimes = [];
  let currentTime = 0;
  let meetingCount = 0;

  for (let i = 1; i <= N; i++) {
    const [startTime, endTime] = list[i].split(" ").map(Number);
    meetingTimes.push({ startTime, endTime });
  }

  meetingTimes.sort((a, b) => a.endTime - b.endTime);

  for (let i = 0; i < N; i++) {
    if (currentTime === meetingTimes[i].startTime) {
      currentTime = meetingTimes[i].endTime;
      meetingCount++;
    }
  }

  return meetingCount;
}

console.log(solution(input));
