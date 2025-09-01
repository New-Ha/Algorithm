const fs = require('fs');
const scores = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let maxScore = 0;
let winnerIndex = 0;

scores.forEach((line, i) => {
    const curTotal = line.split(' ').reduce((sum, score) => sum + Number(score), 0);
    if (curTotal > maxScore) {
        maxScore = curTotal;
        winnerIndex = i + 1;
    }
});

console.log(`${winnerIndex} ${maxScore}`);
