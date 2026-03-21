const fs = require('fs');
const [k, n, m] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const diff = (k * n) - m;
console.log(diff > 0 ? diff : 0)