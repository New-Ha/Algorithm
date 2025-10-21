const fs = require('fs');
const [N, answer] = fs.readFileSync(0).toString().trim().split('\n');

const students = [
  ['Adrian', 'ABC'],
  ['Bruno', 'BABC'],
  ['Goran', 'CCAABB']
];

for (const student of students) {
  const [name, pattern] = student;
  const score = [...answer].reduce(
    (sum, c, i) => sum + (c === pattern[i % pattern.length] ? 1 : 0), 0
  );
  student.push(score);
}

const maxScore = Math.max(...students.map(([, , score]) => score));
console.log(maxScore);

students
  .filter(([, , score]) => score === maxScore)
  .forEach(([name]) => console.log(name));
