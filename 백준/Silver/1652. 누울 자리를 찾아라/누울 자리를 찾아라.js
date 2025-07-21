const fs = require('fs');
const [n, ...room] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(n);

let rows = 0;
for(const seat of room){
    let temp = 0;
    for(let i = 0; i < N; i++){
        if(seat[i] === '.'){
            temp++;
        } else {
            if(temp >= 2){
                rows++;
            }
            temp = 0;
        }
    }
    if(temp >= 2) rows++;
}

let cols = 0;
for(let i = 0; i < N; i++){
    let temp = 0;
    for(let j = 0; j < N; j++){
        if(room[j][i] === '.'){
            temp++;
        } else {
            if(temp >= 2){
                cols++;
            }
            temp = 0;
        }
    }
    if(temp >= 2) cols++;
}

console.log(rows + ' ' + cols)