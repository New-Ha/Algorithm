const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
// const count = Math.min(N, M) - 1 + ((Math.max(N, M) - 1) * Math.min(N, M));
const count = N * M - 1
console.log(count)