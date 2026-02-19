const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

if(Math.pow(N, 2) <= 100000000){
    console.log('Accepted')
}else{
    console.log('Time limit exceeded')
}