const fs = require('fs');
const [now, boom] = fs.readFileSync(0).toString().trim().split('\n');

const [h1, m1, s1] = now.split(':').map(Number);
const [h2, m2, s2] = boom.split(':').map(Number);

const t1 = h1 * 3600 + m1 * 60 + s1;
const t2 = h2 * 3600 + m2 * 60 + s2;

let diff = t2 - t1;

if (diff <= 0) diff += 24 * 3600;

const hh = Math.floor(diff / 3600);
const mm = Math.floor((diff % 3600) / 60);
const ss = diff % 60;

const result =
  `${String(hh).padStart(2, '0')}:` +
  `${String(mm).padStart(2, '0')}:` +
  `${String(ss).padStart(2, '0')}`;

console.log(result);
