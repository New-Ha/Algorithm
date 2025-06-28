const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const callTimes = input[1].split(' ').map(Number); 

let yCost = 0;
let mCost = 0;

for (let time of callTimes) {
  yCost += (Math.floor(time / 30) + 1) * 10;
  mCost += (Math.floor(time / 60) + 1) * 15;
}

if (yCost < mCost) {
  console.log(`Y ${yCost}`);
} else if (mCost < yCost) {
  console.log(`M ${mCost}`);
} else {
  console.log(`Y M ${yCost}`);
}
