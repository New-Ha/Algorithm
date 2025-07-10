const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let zero = 0;
let one = 0;

for (let i = 0; i < input.length; i++) {
  if (i === 0 || input[i] !== input[i - 1]) {
    input[i] === '0' ? zero++ : one++;
  }
}

console.log(Math.min(zero, one));
