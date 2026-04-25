const fs = require('fs');
const [y, m] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const diff = m - y;
console.log(m + diff)