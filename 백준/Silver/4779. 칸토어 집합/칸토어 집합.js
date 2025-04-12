const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cantor = (len) => {
    if(len === 1) return '-';
    
    const third = len / 3;
    const left = cantor(third);
    const mid = " ".repeat(third);
    const right = cantor(third);
    
    return left + mid + right;
}

for(let n of input){
    const len = 3 ** Number(n)
    console.log(cantor(len));
}

