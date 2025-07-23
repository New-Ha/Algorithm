const fs = require('fs');
const [N, ...trophy] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let left = 0;
let maxLeft = 0;
for (let i = 0; i < N; i++) {
    if (trophy[i] > maxLeft) {
        left++;
        maxLeft = trophy[i];
    }
}

let right = 0;
let maxRight = 0;
for (let i = N - 1; i >= 0; i--) {
    if (trophy[i] > maxRight) {
        right++;
        maxRight = trophy[i];
    }
}

console.log(left);
console.log(right);
