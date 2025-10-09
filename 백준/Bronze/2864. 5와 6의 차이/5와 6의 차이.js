const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [A5, B5] = input.map(n => Number(n.replaceAll('6', '5')));
const [A6, B6] = input.map(n => Number(n.replaceAll('5', '6')));

console.log(`${A5 + B5} ${A6 + B6}`)