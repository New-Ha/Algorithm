const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (const line of input) {
  if (line === '0 0 0') break;

  const [a, b, c] = line.split(' ').map(Number).sort((a, b) => a - b);

  if (a + b <= c) console.log('Invalid');
  else if (a === c) console.log('Equilateral');
  else if (a === b || b === c) console.log('Isosceles');
  else console.log('Scalene');
}