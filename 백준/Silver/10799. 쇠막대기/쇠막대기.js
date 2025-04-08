const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const stack = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
        stack.push('(');
    } else if (input[i - 1] === '(') {
        stack.pop();
        count += stack.length;
    } else {
        stack.pop();
        count += 1;
    }
}

console.log(count);