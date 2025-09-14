const fs = require("fs");
const N = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

let result = 0n;
for (let i = 1n; i < N; i = i + 1n) {
  result = result + (N * i + i);
}

console.log(result.toString());
