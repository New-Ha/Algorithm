const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

const memo = Array(n).fill(-1);
memo[0] = 0;
memo[1] = 1;

for(let i = 2; i <= n; i++){
    memo[i] = memo[i - 1] + memo[i - 2]
}

console.log(memo[n])