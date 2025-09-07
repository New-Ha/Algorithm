const fs = require('fs');
const [n, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for(const num of nums){
    if(num === 0) break;
    
    if(num % n === 0){
        console.log(`${num} is a multiple of ${n}.`)
    }else{
        console.log(`${num} is NOT a multiple of ${n}.`)
    }
}