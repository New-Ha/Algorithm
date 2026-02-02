const fs = require('fs'); 
const bits = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let fail = false;
for(const bin of bits){
    if(bin === 9){
        fail = true;
    }
}
console.log(fail === true ? 'F' : 'S')