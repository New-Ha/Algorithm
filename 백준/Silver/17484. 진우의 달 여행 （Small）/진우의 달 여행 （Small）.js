const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const fuelMap = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [1, 0, -1];

const dp = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(3).fill(Infinity))
);

for (let j = 0; j < M; j++) {
  for (let d = 0; d < 3; d++) {
    if ((j === 0 && d === 0) || (j === M - 1 && d === 2)) continue;
    dp[0][j][d] = fuelMap[0][j];
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let d = 0; d < 3; d++) {
      const prevJ = j + dx[d];
      if (prevJ < 0 || prevJ >= M) continue;

      for (let prevD = 0; prevD < 3; prevD++) {
        if (prevD === d) continue;
        dp[i][j][d] = Math.min(
          dp[i][j][d],
          dp[i - 1][prevJ][prevD] + fuelMap[i][j]
        );
      }
    }
  }
}

let result = Infinity;
for (let j = 0; j < M; j++) {
  for (let d = 0; d < 3; d++) {
    result = Math.min(result, dp[N - 1][j][d]);
  }
}

console.log(result);
