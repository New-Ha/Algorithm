const fs = require('fs'); 
const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const result = (A + B) * (A - B);
console.log(result)