const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const stack = [];
let count = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] === '('){
        stack.push(input[i])
    } 
    
    if(input[i] === ')' && input[i - 1] === '('){
        stack.pop();
        count += stack.length;
    } 
    
    if (input[i] === ')' && input[i - 1] === ')') {
        stack.pop();
        count += 1
    }
}

console.log(count)
