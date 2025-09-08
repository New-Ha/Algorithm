const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

for(let i = 1; i < input.length; i++){
    if(input[i] === 999) break;
    
    console.log((input[i] - input[i - 1]).toFixed(2))
}