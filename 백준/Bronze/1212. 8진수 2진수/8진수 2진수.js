const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString().trim();

let result = '';
for(let i = 0; i < num.length ; i++){
    const binary = parseInt(num[i], 8).toString(2);
    result += i === 0 ? binary : binary.padStart(3, '0');
}

console.log(result)