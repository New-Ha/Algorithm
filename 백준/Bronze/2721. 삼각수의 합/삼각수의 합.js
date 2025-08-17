const fs = require('fs');
const [T, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);

function W(n) {
  let t = 1n;
  let sum = 0n;
  for (let i = 1n; i <= n; i++) {
    t += (i + 1n);
    sum += i * t;
  }
  return sum;
}

for (const n of nums) {
    console.log(W(n).toString());
}
