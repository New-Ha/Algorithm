const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
for(const line of input){
    console.log(line)
}