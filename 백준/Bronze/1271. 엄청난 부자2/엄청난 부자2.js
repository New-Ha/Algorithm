const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(BigInt);

console.log(n / m + '\n' + n % m)