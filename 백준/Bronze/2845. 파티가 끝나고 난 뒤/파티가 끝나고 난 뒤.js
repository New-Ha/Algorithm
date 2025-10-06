const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [L, P] = input[0].split(' ').map(Number);
const papers = input[1].split(' ').map(Number);

const participant = L * P;
const result = [];
for(const p of papers){
    result.push(p - participant);
}

console.log(result.join(' '))