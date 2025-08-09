const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const happy = input.split(':-)').length - 1;
const sad = input.split(':-(').length -1;

let result = '';
if(happy === 0 && sad === 0){
    result = 'none';
}else if(happy === sad){
    result = 'unsure';
}else if(happy > sad){
    result = 'happy';
}else if(happy < sad){
    result = 'sad'
}

console.log(result)