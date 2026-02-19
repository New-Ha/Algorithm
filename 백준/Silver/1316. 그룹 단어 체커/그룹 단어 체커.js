const fs = require('fs');
const [N, ...strs] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let count = Number(N);

for (const s of strs) {
  const chars = [];
  let idx = 0;
  let pre = '';

  while (idx < s.length) {
    if (!chars.includes(s[idx])) {
      pre = s[idx];
      chars.push(s[idx]);
      idx++;
    } else if (pre === s[idx]) {
      idx++;
    } else {
      count--;
      break;
    }
  }
}

console.log(count);