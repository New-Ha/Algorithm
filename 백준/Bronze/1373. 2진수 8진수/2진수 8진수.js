const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();


const decimal = BigInt('0b' + input);
console.log(decimal.toString(8)); 