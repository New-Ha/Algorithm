const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const num = Number(input); 

function likeFibo(n, memo = {}) {
  if (n <= 3) return 1n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = likeFibo(n - 1, memo) + likeFibo(n - 3, memo);
  return memo[n];
}

console.log(likeFibo(num).toString());
