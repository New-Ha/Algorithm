const fs = require('fs');
const [t, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let idx = 0;
for(let i = 0; i < Number(t); i++){
    const n = Number(input[idx++]);
    const nums = input[idx++].split(' ').map(Number);
    let sum = 0;
    for(const num of nums){
        if(num <= 10) sum += num;
    }
    console.log(sum)
}