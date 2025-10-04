const fs = require('fs');
const people = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
for(let i = 0; i < people.length; i++){
    if(people[i].includes('FBI')){
        result.push(i + 1);
    }
}

console.log(result.length > 0 ? result.join(' ') : "HE GOT AWAY!")