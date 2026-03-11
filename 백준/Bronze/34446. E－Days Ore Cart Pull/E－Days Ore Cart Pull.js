const fs = require('fs');
const [m, n, t] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(m * 2)