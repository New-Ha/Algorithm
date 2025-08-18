const fs = require('fs');
const bin = fs.readFileSync('/dev/stdin').toString().trim();
const len = bin.length;
const target = len % 3 === 0 ? bin : bin.padStart(Math.ceil(len / 3) * 3, '0');
const oct = ['000', '001', '010', '011', '100', '101', '110', '111'];

let digit = '';
for(let i = 0; i < target.length - 2; i += 3){
    const cur = target.slice(i, i + 3);
    digit += String(oct.indexOf(cur))
}

console.log(digit)
