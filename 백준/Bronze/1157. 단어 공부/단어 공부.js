const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const charCount = {};

for (let char of input.toUpperCase()) {
    charCount[char] = (charCount[char] || 0) + 1;
}

let maxCount = 0;
let result = '?';
for(let [char, count] of Object.entries(charCount)){
    if(count > maxCount){
        maxCount = count;
        result = char;
    } else if(count === maxCount){
        result = '?'
    }
}

console.log(result)
