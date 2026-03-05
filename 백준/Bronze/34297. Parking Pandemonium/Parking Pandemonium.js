const fs = require('fs');
const [m, k, c] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(m * c)