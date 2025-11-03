const fs = require('fs');
const [T, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const [n, ...op] = line.split(' ');
    let cal = Number(n);
    for(const o of op){
        if(o === '@'){
            cal *= 3
        }else if(o === '%'){
            cal += 5
        }else if(o === '#'){
            cal -= 7
        }
    }
    
    console.log(cal.toFixed(2))
}