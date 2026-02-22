const fs = require('fs');
const [A, T] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(n => Number(n) * 2);
const P = 60 - A + T
console.log(P <= 0 ? 0 : P)