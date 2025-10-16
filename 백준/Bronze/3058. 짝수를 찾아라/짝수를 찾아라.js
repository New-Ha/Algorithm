const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const line of input) {
  const nums = line.split(' ').map(Number).filter(n => n % 2 === 0);
  const sum = nums.reduce((a, c) => a + c, 0);
  const min = Math.min(...nums);
  console.log(`${sum} ${min}`);
}