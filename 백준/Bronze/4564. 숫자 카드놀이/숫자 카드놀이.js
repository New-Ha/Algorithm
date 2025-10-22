const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const multiply = numStr =>
  numStr.split('').map(Number).reduce((a, c) => a * c, 1);

for (const line of input) {
  if (line === '0') break;

  const history = [line];
  let cur = line;

  while (cur.length > 1) {
    cur = String(multiply(cur));
    history.push(cur);
  }

  console.log(history.join(' '));
}