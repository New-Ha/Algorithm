const fs = require('fs'); 
const scores = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(n => Number(n) < 40 ? 40 : Number(n));
const sum = scores.reduce((s, n) => s + n, 0);
console.log(sum/scores.length)