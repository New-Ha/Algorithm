const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(' ').map(Number);
const [C, D] = input[1].split(' ').map(Number);

const results = [
  A / C + B / D,
  C / D + A / B,
  D / B + C / A,
  B / A + D / C
];

const max = Math.max(...results);
console.log(results.indexOf(max));