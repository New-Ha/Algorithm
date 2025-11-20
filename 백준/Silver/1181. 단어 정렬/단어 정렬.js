const fs = require('fs');
const [N, ...words] = fs.readFileSync(0, 'utf8').trim().split('\n');

const filtered = Array.from(new Set(words));
const sorted = filtered.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a.localeCompare(b);
});

console.log(sorted.join('\n'));
