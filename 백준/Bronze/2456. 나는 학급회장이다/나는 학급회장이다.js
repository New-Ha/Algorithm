const fs = require('fs');
const [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stats = [
    [0, 0, 0, 1],
    [0, 0, 0, 2],
    [0, 0, 0, 3]
];

for(const line of lines){
    const vote = line.split(' ').map(Number);
    for(let i = 0; i < 3; i++){
        stats[i][0] += vote[i];
        if(vote[i] === 3){
            stats[i][1]++;
        }else if(vote[i] === 2){
            stats[i][2]++;
        }
    }
}

stats.sort((a, b) => {
  if (a[0] !== b[0]) return b[0] - a[0];
  if (a[1] !== b[1]) return b[1] - a[1];
  if (a[2] !== b[2]) return b[2] - a[2];
  return a[3] - b[3];
});

if (stats[0][0] === stats[1][0] &&
    stats[0][1] === stats[1][1] &&
    stats[0][2] === stats[1][2]) {
  console.log(0, stats[0][0]);
} else {
  console.log(stats[0][3], stats[0][0]);
}