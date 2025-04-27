const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

const grades = new Map();
for(let i = 0; i < N; i++){
    const [subject, score] = input[i + 1].split(' ');
    grades.set(subject, Number(score));
}

const subjects = [];
for(let i = 0; i < K; i++){
    subjects.push(input[i + N + 1])
}

let scoreSum = 0;

for(const sub of subjects){
    if(grades.has(sub)){
        scoreSum += grades.get(sub)
    }
}

const remainingGrades = Array.from(grades)
    .filter(([subject, _]) => !subjects.includes(subject))
    .sort((a, b) => b[1] - a[1]);
const additional = M - K;
let maxScore = scoreSum;
let minScore = scoreSum;
for(let i = 0; i < additional; i++){
    maxScore += remainingGrades[i][1];
    minScore += remainingGrades[remainingGrades.length - 1 - i][1];
}


console.log(minScore + ' ' + maxScore)