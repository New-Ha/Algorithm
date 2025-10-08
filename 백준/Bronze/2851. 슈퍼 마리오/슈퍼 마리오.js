const fs = require('fs');
const mushrooms = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const score = [mushrooms[0]];
for(let i = 1; i < mushrooms.length; i++){
    const cum = score[i - 1] + mushrooms[i];
    score.push(cum);
    
    if(cum >= 100) break;
}

const result1 = Math.abs(100 - score[score.length - 1]);
const result2 = Math.abs(100 - score[score.length - 2]);
if(result1 > result2){
    console.log(score[score.length - 2]);
} else {
    console.log(score[score.length - 1]);
}