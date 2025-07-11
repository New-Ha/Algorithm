const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, L] = input[0].split(' ').map(Number);
const holes = input[1].split(' ').map(Number).sort((a, b) => a - b);

let count = 0;
let coverEnd = 0;

for(let i = 0; i < N; i++){
    if (holes[i] <= coverEnd) continue;
    
    count++;
    coverEnd = holes[i] - 0.5 + L;
}

console.log(count)