const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let scenario = 1;
let idx = 0;

while (true) {
    const n = Number(input[idx]);
    if (n === 0) break;

    const students = input.slice(idx + 1, idx + 1 + n);
    const logs = input.slice(idx + 1 + n, idx + 1 + n + (2 * n - 1));

    const memo = Array(n + 1).fill(false);
    for (const line of logs) {
        const studentNum = Number(line.split(' ')[0]);
        memo[studentNum] = !memo[studentNum];
    }

    const lost = memo.indexOf(true);
    console.log(`${scenario} ${students[lost - 1]}`);

    idx += 1 + n + (2 * n - 1);
    scenario++;
}
