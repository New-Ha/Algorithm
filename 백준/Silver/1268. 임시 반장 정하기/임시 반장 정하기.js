const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(n);

const students = [];
for(const line of input){
    students.push(line.split(' ').map(Number));
}

let maxCount = -1;
let captainIdx = 0;

for(let i = 0; i < N; i++){
    let count = 0;
    for(let j = 0; j < N; j++){
        if(i === j) continue;
        
        for(let k = 0; k < 5; k++){
            if(students[i][k] === students[j][k]){
                count++;
                break;
            }
        }
    }
    
    if(count > maxCount){
        maxCount = count;
        captainIdx = i;
    }
}
console.log(captainIdx + 1);