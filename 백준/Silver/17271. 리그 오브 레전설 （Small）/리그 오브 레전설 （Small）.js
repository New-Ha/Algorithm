const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number);
const MOD = 1_000_000_007;

const dp = Array(N + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= N; i++) {
  if (i >= M) {
    dp[i] = (dp[i - 1] + dp[i - M]) % MOD;
  } else {
    dp[i] = dp[i - 1] % MOD;
  }
}

console.log(dp[N])