const fs = require('fs');
let [N, M, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let team = Math.min(Math.floor(N / 2), M);
let remain = N + M - team * 3;

if(remain < K){
    const need = K - remain;
    const reduce = Math.ceil(need / 3);
    team -= reduce;
}

console.log(Math.max(0, team))