const fs = require('fs');
const [n, x] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log((n - 1) * x)