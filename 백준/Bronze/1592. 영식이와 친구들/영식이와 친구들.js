const fs = require('fs');
const [N, M, L] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const friends = Array(N).fill(0);

let cur = 0;
let count = 0;

while (true) {
    friends[cur]++;

    if (friends[cur] === M) break;

    if (friends[cur] % 2 === 1) {
        cur = (cur + L) % N;
    } else {
        cur = (cur - L + N) % N;
    }

    count++;
}

console.log(count);