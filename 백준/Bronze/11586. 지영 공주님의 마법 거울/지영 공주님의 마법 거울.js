const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const mirror = input.slice(1, N + 1);
const K = Number(input[N + 1]);

if (K === 1) {
    console.log(mirror.join('\n'));
} else if (K === 2) {
    const result = [];
    for (let i = 0; i < N; i++) {
        result.push(mirror[i].split('').reverse().join(''));
    }
    console.log(result.join('\n'));
} else if (K === 3) {
    const result = [...mirror].reverse();
    console.log(result.join('\n'));
}