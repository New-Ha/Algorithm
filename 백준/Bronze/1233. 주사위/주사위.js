const fs = require('fs');
const [S1, S2, S3] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const count = Array(S1 + S2 + S3 + 1).fill(0);

for(let i = 1; i <= S1; i++){
    for(let j = 1; j <= S2; j++){
        for(let k = 1; k <= S3; k++){
            const sum = i + j + k;
            count[sum]++;
        }
    }
}

let max = 0;
let result = 0;

for (let i = 3; i <= S1 + S2 + S3; i++) {
    if (count[i] > max) {
        max = count[i];
        result = i;
    }
}

console.log(result)