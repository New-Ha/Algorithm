const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [a, b, c] = input[0].split(' ').map(Number);
const d = Number(input[1]);

const endTime = (a * 3600 + b * 60 + c + d) % (24 * 3600);

const h = Math.floor(endTime / 3600);
const m = Math.floor((endTime % 3600) / 60);
const s = endTime % 60;

console.log(h, m, s);