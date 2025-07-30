const fs = require('fs');
const [word1, word2] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = new Array(26).fill(0);

for (const ch of word1) {
  count[ch.charCodeAt(0) - 97]++;
}

for (const ch of word2) {
  count[ch.charCodeAt(0) - 97]--;
}

const deletions = count.reduce((sum, v) => sum + Math.abs(v), 0);
console.log(deletions);
