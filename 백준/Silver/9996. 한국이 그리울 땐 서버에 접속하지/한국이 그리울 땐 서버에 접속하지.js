const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const [prefix, suffix] = input[1].split('*');

for (let i = 2; i < 2 + N; i++) {
    const word = input[i];

    if (word.length < prefix.length + suffix.length) {
        console.log("NE");
    } else if (word.startsWith(prefix) && word.endsWith(suffix)) {
        console.log("DA");
    } else {
        console.log("NE");
    }
}
