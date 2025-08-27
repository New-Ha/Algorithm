const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

for (const line of input) {
    if (line === '#') break;

    const count = [...line.toLowerCase()].filter(char => vowels.has(char)).length;
    console.log(count);
}