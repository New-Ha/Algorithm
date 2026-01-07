const fs = require('fs'); 
const year = Number(fs.readFileSync(0, 'utf-8').toString().trim());

function isLeapYear (y){
    if((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) return 1
    else return 0
}

console.log(isLeapYear(year))