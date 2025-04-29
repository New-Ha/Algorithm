const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const coordinates = input.slice(1).map(line => line.split(' ').map(Number));

const countX = new Map();
const countY = new Map();

for (const [x, y] of coordinates) {
    countX.set(x, (countX.get(x) || 0) + 1);
    countY.set(y, (countY.get(y) || 0) + 1);
}

let result = 0;
for (const [x, cnt] of countX) {
    if (cnt >= 2) result += 1;
}
for (const [y, cnt] of countY) {
    if (cnt >= 2) result += 1;
}

console.log(result)