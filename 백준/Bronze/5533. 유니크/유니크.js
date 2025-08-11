const fs = require('fs');
const [n, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);
const players = lines.map(l => l.split(' ').map(Number));

const score = Array(N).fill(0);

for (let col = 0; col < 3; col++) {
    const cur = players.map(row => row[col]);
    
    for (let i = 0; i < N; i++) {
        const target = cur[i];
        let cnt = 0;
        for (let k = 0; k < N; k++) if (cur[k] === target) cnt++;
        if (cnt === 1) score[i] += target;
    }
}

console.log(score.join('\n'));
