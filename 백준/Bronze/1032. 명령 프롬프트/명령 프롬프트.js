const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = Number(input[0]);
const files = input.slice(1);

let result = '';
for (let i = 0; i < files[0].length; i++) {
    let char = files[0][i];
    let allSame = true;

    for (let j = 1; j < n; j++) {
        if (files[j][i] !== char) {
            allSame = false;
            break;
        }
    }

    result += allSame ? char : '?';
}
console.log(result);