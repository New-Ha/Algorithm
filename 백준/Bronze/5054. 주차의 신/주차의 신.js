const fs = require('fs');
const [t, ...input] = fs.readFileSync(0).toString().trim().split('\n');
const T = Number(t);

let idx = 0;
for (let i = 0; i < t; i++) {
  const n = Number(input[idx++]);
  const stores = input[idx++].toString().split(' ').map(Number);

  const min = Math.min(...stores);
  const max = Math.max(...stores);

  console.log((max - min) * 2);
}