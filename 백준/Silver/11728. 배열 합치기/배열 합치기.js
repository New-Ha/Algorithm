const fs = require('fs');

const numbers = fs.readFileSync(0, 'utf8')
  .trim()
  .split('\n')
  .slice(1)
  .flatMap(line => line.split(' ').map(Number))
  .sort((a, b) => a - b);

console.log(numbers.join(' '));