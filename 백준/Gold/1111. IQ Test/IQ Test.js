const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

if (N === 1) {
    console.log('A');
    return;
}

if (N === 2) {
    console.log(nums[0] === nums[1] ? nums[1] : 'A');
    return;
}

const denominator = nums[1] - nums[0];
if (denominator === 0) {
    for (let i = 1; i < N; i++) {
        if (nums[i] !== nums[0]) {
            console.log('B');
            return;
        }
    }
    console.log(nums[0]);
    return;
}

const a = (nums[2] - nums[1]) / denominator;
const b = nums[1] - nums[0] * a;

if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log('B');
    return;
}

for (let i = 1; i < N - 1; i++) {
    if (nums[i + 1] !== nums[i] * a + b) {
        console.log('B');
        return;
    }
}

console.log(nums[N - 1] * a + b);
