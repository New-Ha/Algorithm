const fs = require('fs');
const [n ,m] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const cupCake = (n * 8) + (m * 3);
console.log(cupCake - 28)