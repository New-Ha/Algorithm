const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
for(const line of input){
    if(line === 'P=NP'){
        console.log('skipped')
    }else{
        const [A, B] = line.split('+').map(Number);
        console.log(A + B)
    }
}