const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [N, L] = input.split(' ').map(Number);

for (let len = L; len <= 100; len++) {
    const temp = N - (len * (len - 1)) / 2;
    if (temp < 0) break;

    if (temp % len === 0) {
        const x = temp / len;
        const result = [];

        for (let i = 0; i < len; i++) {
            result.push(x + i);
        }

        console.log(result.join(' '));
        return;
    }
}

console.log(-1);
