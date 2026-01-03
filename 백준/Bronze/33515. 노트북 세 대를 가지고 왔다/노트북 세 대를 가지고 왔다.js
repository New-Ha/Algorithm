const fs = require('fs'); 
const times = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(Math.min(...times))