const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let idx = 1;
const arr = []
for(let i = 0; i < N; i++){
    arr.push(input[idx++].split(' ').map(Number));
}

const K = Number(input[idx++]);
for(let k = 0; k < K; k++){
    const [i, j, x, y] = input[idx++].split(' ').map(n => Number(n) - 1);
    let sum = 0;
    for (let r = i; r <= x; r++) {
        for (let c = j; c <= y; c++) {
            sum += arr[r][c];
        }
    }
    console.log(sum)
}