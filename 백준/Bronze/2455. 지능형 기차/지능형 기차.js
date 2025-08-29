const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
let cur = 0;
for(const p of input){
    const [outcome, income] = p.split(' ').map(Number);
    cur = cur - outcome + income;
    max = Math.max(cur, max);
}

console.log(max)