const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let i = 0, j = 0;
const out = [];

while (i < N && j < M) {
  if (A[i] <= B[j]) out.push(A[i++]);
  else out.push(B[j++]);
}

while (i < N) out.push(A[i++]);
while (j < M) out.push(B[j++]);

console.log(out.join(' '));