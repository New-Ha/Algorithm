const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
let start = 1;
let end = 1;
let sum = 1;

while (start <= N) {
    if (sum === N) {
        count++;
    }

    if (sum > N) {
        sum -= start;
        start++;
    } else {
        end++;
        sum += end;
    }
}

console.log(count);
