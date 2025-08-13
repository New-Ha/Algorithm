const fs = require('fs');
const messages = fs.readFileSync(0, 'utf8').trim().split('\n');

const octMap = {
    '-': 0,
    '\\': 1,
    '(': 2,
    '@': 3,
    '?': 4,
    '>': 5,
    '&': 6,
    '%': 7,
    '/': -1 
}

for(const message of messages){
    if(message === '#') break;
    
    let answer = 0;
    for(const char of message){
        answer = answer * 8 + octMap[char];
    }
    console.log(answer)
}
