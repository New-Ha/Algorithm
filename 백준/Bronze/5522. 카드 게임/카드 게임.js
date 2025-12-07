const fs = require('fs');
const nums = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);
const sum = nums.reduce((s, n) => s + n, 0);
console.log(sum);