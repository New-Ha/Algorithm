const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let idx = 0;
let group = 1;

while(true){
    if(input[idx] === '0') break;
    console.log(`Group ${group}`)
    
    const n = Number(input[idx]);
    const papers = input.slice(idx + 1, idx + n + 1);
    idx += n + 1;
    
    const member = papers.map(line => line.split(' ')[0]);
    const nastyLog = [];
    for(let i = 0; i < n; i++){
        const [_, ...message] = papers[i].split(' ');
        for(let j = 0; j < message.length; j++){
            if(message[j] === 'N'){
                const from = member[i];
                const toIndex = (i - j - 1 + n) % n;
                const to = member[toIndex];
                nastyLog.push(`${to} was nasty about ${from}`);
            }
        }
    }
    
    if(nastyLog.length === 0){
        console.log("Nobody was nasty");
    } else {
        nastyLog.forEach(log => console.log(log));
    }
    console.log();
    
    group++;
    
}