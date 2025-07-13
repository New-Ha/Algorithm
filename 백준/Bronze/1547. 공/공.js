const fs = require('fs');
const [N, ...moves] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cups = [1, 2, 3];
for (let i = 0; i < +N; i++) {
    const [a, b] = moves[i].split(' ').map(Number);
    const i1 = cups.indexOf(a);
    const i2 = cups.indexOf(b);
    [cups[i1], cups[i2]] = [cups[i2], cups[i1]];
}

console.log(cups[0]);
