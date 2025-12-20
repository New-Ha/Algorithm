const fs = require('fs'); 
const [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(const line of input){
    if(line.length >= 6 && line.length <= 9){
        console.log("yes")
    }else{
        console.log("no")
    }
}