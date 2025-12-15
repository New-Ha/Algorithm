const fs = require('fs'); 
const L = Number(fs.readFileSync(0, 'utf-8').toString().trim());

const m = Math.floor(L / 5);
if(L % 5 === 0){
    console.log(m)
}else{
    console.log(m + 1)
}