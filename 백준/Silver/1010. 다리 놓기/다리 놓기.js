const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
    const [n, m] = input[i].split(' ').map(Number);
    
    let result = 1;
    for (let j = 0; j < n; j++) {
        result *= (m - j);
        result /= (j + 1);
    }

    console.log(Math.round(result));
}
