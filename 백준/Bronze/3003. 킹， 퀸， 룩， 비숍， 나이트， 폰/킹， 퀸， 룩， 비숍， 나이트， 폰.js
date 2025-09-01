const fs = require('fs');
const chessmen = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const menRule = [1, 1, 2, 2, 2, 8];
const result = chessmen.map((p, i) => menRule[i] - p)
console.log(result.join(' '))