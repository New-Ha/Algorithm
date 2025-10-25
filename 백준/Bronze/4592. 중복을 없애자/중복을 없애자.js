const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (const line of input) {
  const [N, ...nums] = line.split(' ').map(Number);
  if (N === 0) break;
    
  const result = [];
  let prev = null;

  for (const n of nums) {
    if (n !== prev) result.push(n);
    prev = n;
  }

  result.push('$');
  console.log(result.join(' '));
}
