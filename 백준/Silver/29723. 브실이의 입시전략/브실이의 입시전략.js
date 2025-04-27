const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const grades = new Map();
for (let i = 1; i <= N; i++) {
    const [subject, score] = input[i].split(' ');
    grades.set(subject, Number(score));
}

const subjects = new Set();
for (let i = N + 1; i <= N + K; i++) {
    subjects.add(input[i]);
}

let scoreSum = 0;
for (const subject of subjects) {
    scoreSum += grades.get(subject) || 0;
}

const remainingScores = [];
for (const [subject, score] of grades) {
    if (!subjects.has(subject)) {
        remainingScores.push(score);
    }
}

remainingScores.sort((a, b) => b - a);

const additional = M - K;
let maxScore = scoreSum;
let minScore = scoreSum;

for (let i = 0; i < additional; i++) {
    maxScore += remainingScores[i];
    minScore += remainingScores[remainingScores.length - 1 - i];
}

console.log(`${minScore} ${maxScore}`);