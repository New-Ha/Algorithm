const fs = require('fs');
const [N, ...nums] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for (let n of nums) {
  let place = 10;

  while (n >= place) {
    n = Math.round(n / place) * place;
    place *= 10;
  }

  console.log(n);
}
