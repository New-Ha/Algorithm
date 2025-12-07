const fs = require('fs');
const weights = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number).sort((a, b) => a - b);
console.log(weights[1])