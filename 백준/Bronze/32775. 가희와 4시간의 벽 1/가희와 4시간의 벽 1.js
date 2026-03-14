const fs = require('fs');
const [S, F] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(S <= F ? 'high speed rail' : 'flight')