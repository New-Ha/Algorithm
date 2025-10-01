const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const strN = input[0];
const N = Number(input[0]);
const M = Number(input[1]);

if(strN.length * N >= M){
    const n = Math.ceil(M / strN.length);
    console.log(strN.repeat(n).slice(0, M));
} else {
    console.log(strN.repeat(N))
}