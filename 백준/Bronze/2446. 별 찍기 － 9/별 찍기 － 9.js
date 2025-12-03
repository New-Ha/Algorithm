const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

function makeLine(N, i) {
  const spaces = ' '.repeat(N - i);
  const stars = '*'.repeat(2 * i - 1);
  return spaces + stars;
}

const result = [];
for (let i = N ; i > 0; i--) {
  result.push(makeLine(N, i));
}

for (let i = 2; i <= N; i++) {
  result.push(makeLine(N, i));
}

console.log(result.join('\n'));