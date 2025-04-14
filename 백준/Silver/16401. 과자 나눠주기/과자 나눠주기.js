const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const snacks = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...snacks);
let answer = 0;

while(start <= end){
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    
    for(let snack of snacks){
        count += Math.floor(snack / mid)
    }
    
    if(count >= M) {
        answer = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(answer)