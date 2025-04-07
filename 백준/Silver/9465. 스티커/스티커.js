const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const n = parseInt(input[line++]);
  const stickers = [
    input[line++].split(" ").map(Number),
    input[line++].split(" ").map(Number),
  ];

  if (n === 1) {
    console.log(Math.max(stickers[0][0], stickers[1][0]));
    continue;
  }

  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

  dp[0][0] = stickers[0][0];
  dp[1][0] = stickers[1][0];
  dp[0][1] = dp[1][0] + stickers[0][1];
  dp[1][1] = dp[0][0] + stickers[1][1];

  for (let i = 2; i < n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickers[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickers[1][i];
  }

  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}