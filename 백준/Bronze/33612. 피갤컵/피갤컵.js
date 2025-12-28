const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());


function calCupDay(n){
    let year, month;
    for (let i = 0; i < n; i++) {
      const cupDay = new Date(2024, 7 + i * 7);
      year  = cupDay.getFullYear();
      month = cupDay.getMonth() + 1;
    }
    return [year, month]
}

console.log(calCupDay(N).join(' '))