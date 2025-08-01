const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

const N = input[0];
const M = input[1];
const ingredients = input.slice(2).sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let count = 0;

while (left < right) {
    const sum = ingredients[left] + ingredients[right];
    if (sum > M) {
        right--;
    } else if (sum < M) {
        left++;
    } else {
        count++;
        left++;
        right--;
    }
}

console.log(count);
