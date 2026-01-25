const fs = require('fs'); 
const [n, m] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(n === m ? 1 : 0)