const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
const len = str.length;

function reverseWord(str){
    return str.split('').reverse().join('');
}

let best = 'z'.repeat(51);
for(let i = 1;i <= len - 2;i++){
    for(let j = i + 1;j <= len - 1;j++){
        const char1 = reverseWord(str.slice(0, i));
        const char2 = reverseWord(str.slice(i, j));
        const char3 = reverseWord(str.slice(j));
        const newWord = char1 + char2 + char3

        if(newWord < best){
            best = newWord;
        }
    }
}

console.log(best)