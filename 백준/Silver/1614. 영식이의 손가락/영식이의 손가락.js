const fs = require('fs');
const [f, n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let count = 0;
if (f === 1) {
  count = n === 0 ? 0 : 8 * n;
} else if (f === 5) {
  count = n === 0 ? 4 : 4 + 8 * n;
} else {
  if (n === 0) {
    count = f - 1;
  } else {
    count = 1 + 4 * n;
    if (n % 2 === 0) {
      count += f - 2;
    } else {
      count += 4 - f;
    }
  }
}

console.log(count);
