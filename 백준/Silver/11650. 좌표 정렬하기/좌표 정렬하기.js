const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const points = [];
for(let i = 1; i <= N; i++){
    points.push(input[i].split(' ').map(Number))
}

points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1]; 
  }
  return a[0] - b[0]; 
});

points.forEach(([x, y]) => console.log(`${x} ${y}`))
