const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const freq = {};

for (const ch of input) {
  freq[ch] = (freq[ch] || 0) + 1;
}

let oddCount = 0;
let oddChar = '';
for(const ch in freq){
    if(freq[ch] % 2 === 1){
        oddCount++;
        oddChar = ch;
    }
}

if(oddCount > 1){
    console.log("I'm Sorry Hansoo");
    return;
}

const half = [];

Object.keys(freq).sort().forEach(ch => {
  half.push(ch.repeat(Math.floor(freq[ch] / 2)));
});

const firstHalf = half.join('');
const secondHalf = [...firstHalf].reverse().join('');
const palindrome = oddCount === 1
  ? firstHalf + oddChar + secondHalf
  : firstHalf + secondHalf;

console.log(palindrome);