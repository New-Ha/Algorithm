const fs = require('fs');
const [N, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const score = input.split(' ').map(Number);
const maxScore = Math.max(...score);
const fakeScoreSum = score.reduce((acc, cur) => acc + ((cur / maxScore) * 100), 0);
console.log(fakeScoreSum/+N)