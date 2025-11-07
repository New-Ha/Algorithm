const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    if(line === "0 0") break;
    
    const [M, F] = line.split(' ').map(Number);
    console.log(M + F)
}