const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const count = Array(26).fill(0);

for(let i = 0; i < input.length; i++){
    const sentense = input[i].toLowerCase();
    for(let j = 0; j < sentense.length; j++){
        if(sentense[j] === ' ') continue;
        const idx = alphabet.findIndex(ch => ch === sentense[j]);
        count[idx]++;
    }
}

let result = '';
let max = 0;
for(let i = 0; i < count.length; i++){
    if(count[i] > max){
        max = count[i];
        result = alphabet[i];
    } else if (count[i] === max){
        result += alphabet[i];
    } else {
        continue;
    }
}

console.log(result)
