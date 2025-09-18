const fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(BigInt);

if (A > B) [A, B] = [B, A]; 

const count = B - A + 1n;
const sum = (count * (A + B)) / 2n;

console.log(sum.toString());
