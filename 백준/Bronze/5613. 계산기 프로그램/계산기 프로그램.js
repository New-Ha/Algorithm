const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = Number(input[0]);

for(let i = 1; i < input.length; i += 2){
    const op = input[i];
    if(op === '=') break;
    
    const num = Number(input[i + 1]);
    if(op === '+') result += num;
    else if(op === '-') result -= num;
    else if(op === '*') result *= num;
    else if(op === '/') result = Math.trunc(result / num)
}

console.log(result)