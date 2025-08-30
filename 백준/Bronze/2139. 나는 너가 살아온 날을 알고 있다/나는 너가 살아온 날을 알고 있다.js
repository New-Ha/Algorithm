const fs = require('fs');
const days = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const monthLen = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for(const day of days){
    if(day === '0 0 0') break;
    
    const [d, m, y] = day.split(' ').map(Number);
    const isLeaf = y % 4 === 0 &&(y % 100 !== 0 || y % 400 === 0);
    const sumOfDays = monthLen.slice(0, m - 1).reduce((a, c) => a + c, 0) + d;
   
    if(isLeaf && m > 2){
        console.log(sumOfDays + 1)
    }else{
        console.log(sumOfDays)
    }
}