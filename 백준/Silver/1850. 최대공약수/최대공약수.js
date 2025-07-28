const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const getGCD = (a, b) => {
    while (b !== 0n) {
        [a, b] = [b, a % b];
    }
    return a;
};

const len = getGCD(A, B);
console.log('1'.repeat(Number(len)));
