const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
let str = input[0].split('');
const target = input[1];

let count = 0;
while(str.length){
    const temp = str.slice(0, target.length).join('');
    if(temp === target){
        count++;
        str = str.slice(target.length);
    }else{
        str.shift();
    }
}

console.log(count)