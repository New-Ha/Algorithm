const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().trim().split('').map(Number);
console.log(num.sort((a, b) => b - a).join(''))