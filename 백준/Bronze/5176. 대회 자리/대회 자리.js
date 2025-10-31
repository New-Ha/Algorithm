const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const T = Number(input[0])

let idx = 1;
for(let i = 0; i < T; i++){
    const [P, M] = input[idx++].split(' ').map(Number);
    const seats = Array(M + 1).fill(0);
    let non = 0;
    for(let j = 0; j < P; j++){
        const pick = Number(input[idx++]);
        
        if(seats[pick] !== 0){
            non++;
        }else{
             seats[pick] = idx - 1;
        }
    }
    console.log(non)
}