const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let member of input){
    if(member === '# 0 0') break;
    
    const [name, age, weight] = member.split(' ');
    if(Number(age) > 17 || Number(weight) >= 80){
        console.log(`${name} Senior`);
    }else{
        console.log(`${name} Junior`)
    }
}