const fs = require('fs');
const scores = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const W = scores.slice(0, 10);
const H = scores.slice(10, 20);

const getPoint = (arr) =>
  arr.sort((a, b) => b - a).slice(0, 3).reduce((sum, score) => sum + score, 0);

console.log(getPoint(W), getPoint(H));