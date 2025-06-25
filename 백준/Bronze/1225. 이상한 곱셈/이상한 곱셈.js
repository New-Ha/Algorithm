const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const sumA = [...A].reduce((acc, cur) => acc + Number(cur), 0);
const sumB = [...B].reduce((acc, cur) => acc + Number(cur), 0);

console.log(sumA * sumB);