const fs = require('fs'); 
const [a, b] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const result = [a + b, a - b, a * b, Math.floor(a / b), a % b];
console.log(result.join('\n'))