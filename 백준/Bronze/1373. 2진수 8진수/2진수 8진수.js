const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const targetBinary = input.padStart(Math.ceil(input.length / 3) * 3, '0');

let result = '';
for (let i = 0; i < targetBinary.length; i += 3) {
    const binNum = targetBinary.slice(i, i + 3);
    const digitNum = parseInt(binNum, 2);
    result += digitNum.toString();
}

console.log(result);