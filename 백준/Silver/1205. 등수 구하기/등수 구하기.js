const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, score, P] = input[0].split(' ').map(Number);
if(N === 0){
    console.log(1);
    return;
}

const ranking = input[1].split(' ').map(Number);

if(N === P && score <= ranking[P - 1]){
	console.log(-1);
    return;
}

let rank = 1;
for(let i = 0; i < ranking.length; i++){
    if(score < ranking[i]) rank++;
    else break;
}

console.log(rank);