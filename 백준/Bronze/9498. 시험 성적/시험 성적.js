const fs = require('fs'); 
const score = Number(fs.readFileSync(0, 'utf-8').toString().trim());

function getRank (n){
    if(90 <= n && n <= 100) return 'A'
    else if(80 <= n && n < 90) return 'B'
    else if(70 <= n && n < 80) return 'C'
    else if(60 <= n && n < 70) return 'D'
    else return 'F'
}

console.log(getRank(score))