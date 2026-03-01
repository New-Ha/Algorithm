const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

const office = new Set();

for (const line of input) {
  const [name, state] = line.split(' ');
  if (state === 'enter') {
    office.add(name);
  } else {
    office.delete(name);
  }
}

console.log([...office].sort().reverse().join('\n'));