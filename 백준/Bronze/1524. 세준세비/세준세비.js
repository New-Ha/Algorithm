const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = Number(input[0]);

let idx = 1;
for (let t = 0; t < T; t++) {
  while (idx < input.length && input[idx].trim() === '') {
    idx++;
  }

  const [N, M] = input[idx++].trim().split(' ').map(Number);

  const Smax = Math.max(...input[idx++].trim().split(' ').map(Number));
  const Bmax = Math.max(...input[idx++].trim().split(' ').map(Number));

  console.log(Smax >= Bmax ? 'S' : 'B');
}