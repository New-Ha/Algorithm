const fs = require('fs');
const [n, c, p] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(n * p)