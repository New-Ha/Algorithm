const fs = require('fs');
const [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
for(const line of input){
    let result = line[0];
    
    for(let i = 1; i < line.length; i++){
        if(line[i] === result[result.length - 1]) continue
        else result += line[i]
    }
    
    console.log(result)
}