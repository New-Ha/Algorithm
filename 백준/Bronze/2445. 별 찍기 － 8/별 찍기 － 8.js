const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const N = Number(input);

function makeLine(N, i) {
  const spaces = ' '.repeat(2 * N - (i * 2));
  const stars = '*'.repeat(i);
  return stars + spaces + stars;
}

const result = [];
for(let i = 1; i <= N; i++){
    result.push(makeLine(N, i))
}

for(let i = N - 1; i > 0; i--){
    result.push(makeLine(N, i))
}

console.log(result.join('\n'))