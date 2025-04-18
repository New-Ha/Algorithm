const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getCombinations(numbers, start, comb) {
  if (comb.length === 6) {
    console.log(comb.join(" "));
    return;
  }

  for (let i = start; i < numbers.length; i++) {
    getCombinations(numbers, i + 1, [...comb, numbers[i]]);
  }
}

    
for (let line of input) {
  const tokens = line.trim().split(" ").map(Number);
  if (tokens[0] === 0) break;

  const numbers = tokens.slice(1);
  getCombinations(numbers, 0, []);
  console.log();
}