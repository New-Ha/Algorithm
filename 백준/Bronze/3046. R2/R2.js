const fs = require('fs');
const [N1, S] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log((S * 2) - N1)