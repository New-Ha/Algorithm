const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const scores = input.split(' ').map(Number);

let total = 0;
let count = 0;
let isSequence = false;
for(const s of scores){
    if(s === 1){
        isSequence = true;
        count += 1;
        total += count;
    } else {
        isSequence = false;
        count = 0;
    }
}

console.log(total)