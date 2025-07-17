const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let N = Number(input);

let time = 0;
let k = 1;

while (N > 0) {
    if (N < k) k = 1;
    
    N -= k;
    k++;
    time++;
}

console.log(time)