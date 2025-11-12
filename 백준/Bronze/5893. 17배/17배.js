const fs = require('fs');
const N = BigInt('0b' + fs.readFileSync(0, 'utf8').trim());
const result = N * 17n;

console.log(result.toString(2));