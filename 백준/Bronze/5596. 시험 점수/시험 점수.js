const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const scores = lines.map(line =>
  line.split(' ').reduce((sum, n) => sum + Number(n), 0)
);

console.log(Math.max(...scores));