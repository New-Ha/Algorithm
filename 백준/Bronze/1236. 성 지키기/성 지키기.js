const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1);

const guardedRows = Array(N).fill(false);
const guardedCols = Array(M).fill(false);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 'X') {
      guardedRows[i] = true;
      guardedCols[j] = true;
    }
  }
}

const unguardedRowCount = guardedRows.filter(v => !v).length;
const unguardedColCount = guardedCols.filter(v => !v).length;

console.log(Math.max(unguardedRowCount, unguardedColCount));
