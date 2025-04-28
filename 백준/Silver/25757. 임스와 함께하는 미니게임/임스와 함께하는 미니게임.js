const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, game] = input[0].split(' ');

const players = new Set(input.slice(1));
const divisor = {"Y": 1, "F": 2, "O": 3};

console.log(Math.floor(players.size / divisor[game]))
