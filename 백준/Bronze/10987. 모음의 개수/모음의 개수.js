const vowel = ['a', 'e', 'i', 'o', 'u'];

const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim().split('').filter(c => vowel.includes(c));

console.log(str.length)