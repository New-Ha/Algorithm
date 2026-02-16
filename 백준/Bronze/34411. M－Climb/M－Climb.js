const fs = require('fs');
const [m, n, y] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(m * n)