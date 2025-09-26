const fs = require('fs');
const [n, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let maxPrize = 0;

for (const line of lines) {
    const [a, b, c] = line.split(' ').map(Number);
    
    let prize = 0;
    if (a === b && b === c) {
        prize = 10000 + a * 1000;
    } else if (a === b || a === c) {
        prize = 1000 + a * 100;
    } else if (b === c) {
        prize = 1000 + b * 100;
    } else {
        prize = Math.max(a, b, c) * 100;
    }

    maxPrize = Math.max(maxPrize, prize);
}

console.log(maxPrize);
