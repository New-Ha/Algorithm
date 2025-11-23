const fs = require('fs');
const board = fs.readFileSync(0, 'utf8').trim();

const POLY_A = 'AAAA';
const POLY_B = 'BB';

let result = '';
let countX = 0;
let impossible = false;

const flush = () => {
  if (countX === 0) return;

  if (countX % 2 === 1) {
    impossible = true;
    return;
  }

  const cntA = Math.floor(countX / 4);
  for (let i = 0; i < cntA; i++) {
    result += POLY_A;
  }

  if (countX % 4 !== 0) {
    result += POLY_B;
  }

  countX = 0;
};

for (const ch of board) {
  if (ch === 'X') {
    countX++;
  } else if (ch === '.') {
    flush();
    if (impossible) break;
    result += '.';
  }
}

flush();
console.log(impossible ? -1 : result);