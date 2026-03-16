const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

for (const line of input) {
  const [h1, m1, s1, h2, m2, s2] = line.split(' ').map(Number);

  const start = h1 * 3600 + m1 * 60 + s1;
  const end = h2 * 3600 + m2 * 60 + s2;

  const diff = end - start;

  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;

  console.log(h, m, s);
}