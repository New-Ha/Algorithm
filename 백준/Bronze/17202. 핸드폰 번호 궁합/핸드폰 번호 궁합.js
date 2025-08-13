const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

let numbers = [];
for (let i = 0; i < 8; i++) {
  numbers.push(Number(lines[0][i]));
  numbers.push(Number(lines[1][i]));
}

while (numbers.length > 2) {
  const temp = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    temp.push((numbers[i] + numbers[i + 1]) % 10);
  }
  numbers = temp;
}

console.log(numbers.join(''));
