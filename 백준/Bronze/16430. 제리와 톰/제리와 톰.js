const fs = require('fs'); 
const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const denom = B
const num = B - A;
console.log(`${num} ${denom}`)