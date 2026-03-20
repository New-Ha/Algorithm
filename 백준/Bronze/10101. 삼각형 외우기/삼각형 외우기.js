const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

if (a + b + c !== 180) {
  console.log('Error');
} else if (a === b && b === c) {
  console.log('Equilateral');
} else if (a !== b && a !== c && b !== c) {
  console.log('Scalene');
} else {
  console.log('Isosceles');
}