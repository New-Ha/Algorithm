const fs = require('fs');
const [N, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

const users = input
  .map(line => {
    const [age, name] = line.split(' ');
    return { age: +age, name };
  })
  .sort((a, b) => a.age - b.age);

console.log(users.map(u => `${u.age} ${u.name}`).join('\n'));