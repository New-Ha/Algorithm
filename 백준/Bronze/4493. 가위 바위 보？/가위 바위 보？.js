const fs = require('fs');
const [t, ...ts] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
for (let i = 0; i < Number(t); i++) {
    const n = Number(ts[idx++]);
    let score1 = 0;
    let score2 = 0;

    for (let j = 0; j < n; j++) {
        const [p1, p2] = ts[idx++].split(' ');

        if (p1 === p2) continue;
        else if (
            (p1 === 'R' && p2 === 'S') ||
            (p1 === 'S' && p2 === 'P') ||
            (p1 === 'P' && p2 === 'R')
        ) {
            score1++;
        } else {
            score2++;
        }
    }

    const result =
        score1 > score2 ? 'Player 1' :
        score1 < score2 ? 'Player 2' : 'TIE';

    console.log(result);
}
