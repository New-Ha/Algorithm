const fs = require('fs'); 
const [n1, n2, n12] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const result = Math.floor((n1 + 1) * (n2 + 1) / (n12 + 1) - 1);
console.log(result)