const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const want = input[1].split(' ').map(Number);

let reject = 0;
const seats = [];
for(let i = 0; i < N; i++){
    if(!seats.includes(want[i])){
        seats.push(want[i]);
    } else {
        reject++;
    }
}

console.log(reject)