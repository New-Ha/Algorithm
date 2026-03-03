const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const a = Number(input[0]);
const [w, v] = input[1].split(' ').map(Number);
const adapter = Math.floor(w / v);
console.log(a <= adapter ? 1 : 0)