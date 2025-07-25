const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

for (let i = 5; i <= n; i += 5) {
    let temp = i;
    while (temp % 5 === 0) {
        count++;
        temp /= 5;
    }
}

console.log(count);
