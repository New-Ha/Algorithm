const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [A, B] = input.split(' ');

let minDiff = Infinity;
for (let i = 0; i <= B.length - A.length; i++) {
    let diff = 0;
    for (let j = 0; j < A.length; j++) {
        if (A[j] !== B[i + j]) diff++;
    }
    minDiff = Math.min(minDiff, diff);
}

console.log(minDiff)