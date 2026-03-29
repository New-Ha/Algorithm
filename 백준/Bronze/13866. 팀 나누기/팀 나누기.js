const fs = require('fs');
const skillLevel = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number).sort((a, b) => a - b);
const team1 = skillLevel[0] + skillLevel[3];
const team2 = skillLevel[1] + skillLevel[2];
console.log(Math.abs(team1 - team2))