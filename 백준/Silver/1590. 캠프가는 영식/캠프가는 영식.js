const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);

let minWait = Infinity;

for (let i = 1; i <= N; i++) {
    const [S, I, C] = input[i].split(' ').map(Number);
    
    for (let j = 0; j < C; j++) {
        const arrival = S + j * I;
        if (arrival >= T) {
            minWait = Math.min(minWait, arrival - T);
            break;
        }
    }
}

console.log(minWait === Infinity ? -1 : minWait);