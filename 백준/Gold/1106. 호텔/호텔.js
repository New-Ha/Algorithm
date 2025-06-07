const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [C, N] = input[0].split(' ').map(Number);

const cities = [];
for (let i = 1; i <= N; i++) {
  const [cost, customer] = input[i].split(' ').map(Number);
  cities.push({ cost, customer });
}

const dp = Array(C + 100).fill(1e9);
dp[0] = 0;

for (const { cost, customer } of cities) {
  for (let i = customer; i < dp.length; i++) {
    dp[i] = Math.min(dp[i], dp[i - customer] + cost);
  }
}

console.log(Math.min(...dp.slice(C)));
