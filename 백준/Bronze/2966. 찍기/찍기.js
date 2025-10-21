const fs = require('fs');
const [N, answer] = fs.readFileSync(0).toString().trim().split('\n');

const patterns = {
  Adrian: 'ABC',
  Bruno: 'BABC',
  Goran: 'CCAABB'
};

const scores = Object.entries(patterns).map(([name, pattern]) => [
  name,
  [...answer].filter((c, i) => c === pattern[i % pattern.length]).length
]);

const maxScore = Math.max(...scores.map(([_, s]) => s));

console.log(maxScore);
scores
  .filter(([_, s]) => s === maxScore)
  .forEach(([name]) => console.log(name));