const fs = require('fs');
const [N, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const sentence = line.split(' ');
    for(let i = 0; i < 2; i++){
        const temp = sentence.shift();
        sentence.push(temp)
    }
    console.log(sentence.join(' '))
}