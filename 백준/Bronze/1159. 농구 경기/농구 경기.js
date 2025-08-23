const fs = require('fs');
const [N, ...names] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nameMap = new Map();
for(const n of names){
    const ch = n[0];
    nameMap.set(ch, nameMap.get(ch)? nameMap.get(ch) + 1 : 1);
}

let result = [];
for(const [char, count] of nameMap){
    if(count >= 5){
        result.push(char)
    }
}

console.log(result.length ? result.sort().join('') : 'PREDAJA');