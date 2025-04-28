const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, game] = input[0].split(' ');

const players = new Set();
for(let i = 1; i <= Number(N); i++){
    players.add(input[i]);
}

if (game === 'Y') {
    console.log(players.size);
} else if (game === 'F') {
    console.log(Math.floor(players.size / 2));
} else if (game === 'O') {
    console.log(Math.floor(players.size / 3));
}