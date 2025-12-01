const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

function makeLine(N, i) {
  const spaces = ' '.repeat(N - i);
  const stars = '*'.repeat(2 * i - 1);
  return spaces + stars;
}

for(let i = 1; i <= N; i++){
    console.log(makeLine(N, i))
}