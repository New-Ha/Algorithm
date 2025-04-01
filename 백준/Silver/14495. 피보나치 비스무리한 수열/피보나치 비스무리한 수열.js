const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = +input;

const dp = new Array(n + 1).fill(0n); 

dp[1] = 1n;
if (n >= 2) dp[2] = 1n;
if (n >= 3) dp[3] = 1n;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 3]; 
}

console.log(dp[n].toString());