const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

function getResult (n){
    return "LoveisKoreaUniversity ".repeat(n).trim()
}

console.log(getResult(N))