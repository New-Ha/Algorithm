const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [N, K] = input;
const INF = 1e9;
const dp = Array(N + 1).fill(INF);
dp[0] = 0;

for (let i = 0; i <= N; i++) {
  if (i + 1 <= N) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  }
  const jump = i + Math.floor(i / 2);
  if (jump <= N) {
    dp[jump] = Math.min(dp[jump], dp[i] + 1);
  }
}

console.log(dp[N] <= K ? 'minigimbob' : 'water');
