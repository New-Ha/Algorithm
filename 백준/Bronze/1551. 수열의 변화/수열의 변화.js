const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const sequence = input[1].split(',').map(Number);

for(let i = 0; i < K; i++){
    for(let j = 0; j < N; j++){
        sequence[j] = sequence[j + 1] - sequence[j];
    }
}
const result = sequence.filter(n => !Number.isNaN(n));
console.log(result.join(','))