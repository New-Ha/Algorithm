const fs = require('fs');
const [a, b, c, d, e, f] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
const topA = [a, b, c, d].sort((a, b) => b - a).slice(0, 3).reduce((sum, n) => sum + n, 0);
const topB = Math.max(e, f);

console.log(topA + topB)