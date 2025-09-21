const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (const line of input) {
    if (line === '0 0') break;

    const [aRev, bRev] = line.split(' ').map(s => s.split('').reverse());
    const len = Math.max(aRev.length, bRev.length);

    let carry = 0;
    let count = 0;

    for (let i = 0; i < len; i++) {
        const sum = Number(aRev[i] || 0) + Number(bRev[i] || 0) + carry;

        if (sum >= 10) {
            carry = 1;
            count++;
        } else {
            carry = 0;
        }
    }

    console.log(count);
}