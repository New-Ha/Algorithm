const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(const line of input){
    if(line === '***') break;
    
    const result = line.split('').reverse().join('');
    console.log(result)
}