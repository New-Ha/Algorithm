const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

let result = '';

for (const c of str) {
    result += (c === c.toUpperCase()) ? c.toLowerCase() : c.toUpperCase();
}

console.log(result);
