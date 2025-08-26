const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
while (idx < input.length) {
    const N = Number(input[idx]);
    
    let sum = 0n;
    for (let i = idx + 1; i <= idx + N; i++) {
        sum += BigInt(input[i]);
    }

    if (sum === 0n) console.log(0);
    else if (sum > 0n) console.log('+');
    else console.log('-');

    idx += N + 1;
}