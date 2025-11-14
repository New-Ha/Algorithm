const fs = require('fs');
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(n => BigInt('0b' + n));
const sum = A + B
console.log(sum.toString(2))