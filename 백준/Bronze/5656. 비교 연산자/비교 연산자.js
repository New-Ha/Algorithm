const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const ops = {
  '>':  (a, b) => a >  b,
  '>=': (a, b) => a >= b,
  '<':  (a, b) => a <  b,
  '<=': (a, b) => a <= b,
  '==': (a, b) => a === b,
  '!=': (a, b) => a !== b,
};

let caseNo = 1;
for (const line of input) {
  const [A, op, B] = line.split(' ');
  if (op === 'E') break;

  const a = Number(A), b = Number(B);
  const fn = ops[op];
  const result = fn(a, b); 
  console.log(`Case ${caseNo++}: ${result}`);
}
