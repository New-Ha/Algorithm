const fs = require('fs');
const mushrooms = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sum = 0;
let prev = 0;

for (const m of mushrooms) {
  prev = sum;
  sum += m;
  if (sum >= 100) break;
}

if (Math.abs(100 - sum) > Math.abs(100 - prev)) {
  console.log(prev);
} else {
  console.log(sum);
}