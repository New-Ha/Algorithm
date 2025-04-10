const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const weights = input[1].split(' ').map(Number).sort((a, b) => a - b);

let target = 1;

for (let i = 0; i < N; i++) {
  if (weights[i] <= target) {
    target += weights[i];
  } else {
    break;
  }
}

console.log(target);