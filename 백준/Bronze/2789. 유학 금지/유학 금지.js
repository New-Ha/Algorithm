const fs = require('fs');
const word = fs.readFileSync('/dev/stdin').toString().trim().split('');
const exception = 'CAMBRIDGE';
console.log(word.filter(c => !exception.includes(c)).join(''))