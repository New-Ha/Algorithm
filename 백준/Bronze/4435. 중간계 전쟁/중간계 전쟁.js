const fs = require('fs');
const [N, ...wars] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const gandalfs = [1, 2, 3, 3, 4, 10];
const saurons = [1, 2, 2, 2, 3, 5, 10];

const result = [];
for(let i = 0; i < wars.length; i += 2){
    const g = wars[i].split(' ').map((num, idx) => gandalfs[idx] * Number(num)).reduce((a, c) => a + c, 0);
    const s = wars[i + 1].split(' ').map((num, idx) => saurons[idx] * Number(num)).reduce((a, c) => a + c, 0);
    if(g > s) result.push("Good triumphs over Evil");
    else if (g < s) result.push( "Evil eradicates all trace of Good");
    else result.push("No victor on this battle field")
}

for(let i = 0; i < result.length; i++){
    console.log(`Battle ${i + 1}: ${result[i]}`)
}