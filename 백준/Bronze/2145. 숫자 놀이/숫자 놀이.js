const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(const num of input){
    if(num === '0') break;
    
    let cur = num.split('').map(Number);
    while(cur.length > 1){
        const sum = cur.reduce((a, c) => a + c, 0);
        cur = String(sum).split('').map(Number);
    }
    console.log(...cur)
}
