const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    result = input[0].split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
    console.log(result)
});