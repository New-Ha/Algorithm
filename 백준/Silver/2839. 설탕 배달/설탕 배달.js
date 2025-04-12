const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let N = Number(input);

let sugar = 0;

while(N){
    if(N % 5 === 0){
        sugar += N / 5;
        break;
    }
    N -= 3;
    sugar++;
    if(N< 0){
        sugar = -1;
        break;
    }
}

console.log(sugar)