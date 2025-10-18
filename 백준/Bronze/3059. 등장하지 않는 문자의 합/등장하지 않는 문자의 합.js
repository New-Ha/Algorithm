const fs = require('fs');
const [T, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
for(const line of input){
    const sum = alpha.filter(ch => !line.includes(ch))
                      .reduce((a, c) => a + c.charCodeAt(0), 0);             
    console.log(sum)
}
