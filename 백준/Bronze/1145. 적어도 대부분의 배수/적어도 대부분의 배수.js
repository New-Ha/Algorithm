const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let num = 1;

while (true) {
  let count = 0;

  for (const n of input) {
    if (num % n === 0) count++;
  }

  if (count >= 3) {
    console.log(num);
    break;
  }

  num++;
}
