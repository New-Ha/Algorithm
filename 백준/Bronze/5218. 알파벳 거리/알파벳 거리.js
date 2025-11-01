const fs = require('fs');
const [T, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const [x, y] = line.split(' ');
    
    const distances = ['Distances:'];
    for(let i = 0; i < x.length; i++){
        const xCode = x.charCodeAt(i);
        const yCode = y.charCodeAt(i);
        if(xCode <= yCode){
            distances.push(yCode - xCode)
        }else{
            distances.push(yCode - xCode + 26)
        }
    }
    console.log(distances.join(' '))
}
