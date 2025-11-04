const fs = require('fs');
const [T, ...books] = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const nineBooks = books.reduce((s, p) => s + p, 0);

console.log(T - nineBooks)