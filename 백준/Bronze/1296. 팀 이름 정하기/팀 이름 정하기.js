const fs = require("fs");
const [yeondu, N, ...names] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const countLOVE = name => ['L','O','V','E'].map(char => name.split(char).length - 1);
const yeonduCnt = countLOVE(yeondu);

let best = names[0], maxScore = -1;
const teamNames = names.sort();
for(const tName of teamNames){
    const [l, o, v, e] = countLOVE(tName);
    const [L, O, V, E] = yeonduCnt.map((x, i) => x + [l, o, v, e][i]);
    const score = ((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E)) % 100;

    if (score > maxScore) {
    maxScore = score;
    best = tName;
  }
}

console.log(best);