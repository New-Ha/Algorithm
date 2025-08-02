const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let digit = 1;
let start = 1;
let result = 0;

while (start <= N) {
  const end = Math.min(N, start * 10 - 1);
  result += (end - start + 1) * digit;
  start *= 10;
  digit++;
}

console.log(result % 1234567);
