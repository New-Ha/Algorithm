const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const board = input.slice(1).map(line => line.trim().split(' '));

const dx = [0, 1];
const dy = [1, 0];

let maxResult = -Infinity;
let minResult = Infinity;

function calculate(a, operator, b) {
    a = parseInt(a);
    b = parseInt(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}

function dfs(x, y, currentValue, operator) {
    if (x === N - 1 && y === N - 1) {
        maxResult = Math.max(maxResult, currentValue);
        minResult = Math.min(minResult, currentValue);
        return;
    }

    for (let dir = 0; dir < 2; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
            const cell = board[nx][ny];
            if (['+', '-', '*'].includes(cell)) {
                dfs(nx, ny, currentValue, cell);
            } else {
                const nextValue = calculate(currentValue, operator, cell);
                dfs(nx, ny, nextValue, null);
            }
        }
    }
}

const startCell = board[0][0];
if (['+', '-', '*'].includes(startCell)) {
} else {
    dfs(0, 0, parseInt(startCell), null);
}

console.log(`${maxResult} ${minResult}`);
