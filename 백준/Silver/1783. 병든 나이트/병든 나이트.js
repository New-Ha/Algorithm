const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number);

let result = 0;

if (N === 1) {
    result = 1;
} else if (N === 2) {
    result = Math.min(4, Math.floor((M + 1) / 2));
} else if (N >= 3 && M < 7) {
    result = Math.min(4, M);
} else {
    result = M - 2;
}

console.log(result);
