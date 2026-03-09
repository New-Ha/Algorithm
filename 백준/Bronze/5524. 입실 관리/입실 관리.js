const fs = require('fs');
const [N, ...si] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
for(const name of si){
    console.log(name.toLowerCase())
}