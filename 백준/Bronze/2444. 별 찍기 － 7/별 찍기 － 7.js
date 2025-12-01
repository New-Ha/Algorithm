const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

function makeLine(N, i) {
  const spaces = ' '.repeat(N - i);
  const stars = '*'.repeat(2 * i - 1);
  return spaces + stars;
}

const result = [];

for (let i = 1; i <= N; i++) {
  result.push(makeLine(N, i));
}

for (let i = N - 1; i >= 1; i--) {
  result.push(makeLine(N, i));
}

console.log(result.join('\n'));
