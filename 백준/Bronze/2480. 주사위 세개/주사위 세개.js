const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if(a === b && a === c){
    console.log(a * 1000 + 10000)
} else if (a !== b && a !== c && b !== c){
    console.log(Math.max(a, b, c) * 100)
} else {
    const sameN = a === b ? a : b === c ? b : a;
    console.log(sameN * 100 + 1000)
}