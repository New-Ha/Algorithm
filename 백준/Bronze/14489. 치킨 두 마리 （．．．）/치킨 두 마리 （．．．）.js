const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const bank = input[0].split(' ').map(Number).reduce((sum, n) => sum + n, 0);
const chicken = Number(input[1]) * 2;

if(chicken <= bank){
    console.log(bank - chicken)
}else{
    console.log(bank)
}