const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

for(const line of input){
    if(line === '*') break;
    
    const letters = [...line.toLowerCase()].filter(ch => alphabet.includes(ch));
    const count = new Set(letters);
    console.log(count.size === 26 ? 'Y' : 'N');
}