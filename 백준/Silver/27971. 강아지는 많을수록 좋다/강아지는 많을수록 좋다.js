const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M, A, B] = input[0].split(' ').map(Number);

const forbidden = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [L, R] = input[i].split(' ').map(Number);
  for (let j = L; j <= R && j <= N; j++) {
    forbidden[j] = true;
  }
}

const dp = Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= N; i++) {
  if (dp[i] === Infinity || forbidden[i]) continue;

  for (const add of [A, B]) {
    const next = i + add;
    if (next <= N && !forbidden[next]) {
      dp[next] = Math.min(dp[next], dp[i] + 1);
    }
  }
}

console.log(dp[N] === Infinity ? -1 : dp[N]);
