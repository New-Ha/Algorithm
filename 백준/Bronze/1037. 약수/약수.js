const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const divisors = input[1].split(' ').map(Number).sort((a, b) => a - b);

const result = divisors.length === 1
    ? divisors[0] * divisors[0]
    : divisors[0] * divisors[divisors.length - 1];

console.log(result)

