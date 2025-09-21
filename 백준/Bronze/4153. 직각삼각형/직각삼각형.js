const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(const line of input){
    if(line === '0 0 0') break;
    
    const [A, B, C] = line.split(' ').map(Number).sort((a, b) => a - b);
    const isRight = A ** 2 + B ** 2 === C ** 2
    console.log(isRight ? "right" : "wrong")
}