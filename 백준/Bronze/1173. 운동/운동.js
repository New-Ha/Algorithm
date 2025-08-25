const fs = require('fs');
const [N, m, M, T, R] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let minute = 0;
let exercise = 0;
let X = m;

if (m + T > M) {
    console.log(-1);
    return;
}

while (exercise < N) {
    if (X + T <= M) {
        exercise++;
        X += T;
    } else {
        X = Math.max(X - R, m);
    }
    minute++;
}

console.log(minute);