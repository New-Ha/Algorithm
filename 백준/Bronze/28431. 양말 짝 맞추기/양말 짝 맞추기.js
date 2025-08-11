const fs = require('fs');
const nums = fs.readFileSync(0,'utf8').trim().split('\n').map(Number);

const s = new Set();
for (const n of nums) {
  if (s.has(n)) s.delete(n);
  else s.add(n);
}

console.log([...s][0]);
