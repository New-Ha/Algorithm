const fs = require('fs');
const [nm, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

const mergeArr = [];
for (const line of input) {
  mergeArr.push(...line.split(' ').map(Number));
}

console.log(mergeArr.sort((a, b) => a - b).join(' '));