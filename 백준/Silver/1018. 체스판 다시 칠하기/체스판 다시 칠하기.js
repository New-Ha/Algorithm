const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let minRepaint = Infinity;

for (let y = 0; y < N - 7; y++) {
    for (let x = 0; x < M - 7; x++) {
        let repaintW = 0;
        let repaintB = 0;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const current = board[y + i][x + j];

                const caseW = (i + j) % 2 === 0 ? 'W' : 'B';
                const caseB = (i + j) % 2 === 0 ? 'B' : 'W';

                if (current !== caseW) repaintW++;
                if (current !== caseB) repaintB++;
            }
        }
				const curMinRepaint = Math.min(repaintW, repaintB);
				minRepaint = Math.min(minRepaint, curMinRepaint);
    }
}

console.log(minRepaint);
