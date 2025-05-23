const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arrA = input[1].split(' ').map(Number).sort((a, b) => a - b);
const arrB = input[2].split(' ').map(Number);
const indexB = arrB.map((val, idx) => ({val, idx})).sort((a, b) => b.val - a.val);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arrA[i] * indexB[i].val;
}

console.log(sum)
