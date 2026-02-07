const fs = require('fs'); 
const [t, ...nums] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(const n of nums){
    console.log(`${n} ${n}`)
}