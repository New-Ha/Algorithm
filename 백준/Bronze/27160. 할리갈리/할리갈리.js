const fs = require('fs');
const [N, ...cards] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const fruits = {
    'STRAWBERRY': 0, 
    'BANANA': 0, 
    'LIME': 0, 
    'PLUM': 0
}

for(const c of cards){
    const [f, n] = c.split(' ');
    fruits[f] += Number(n);
}

let result = 'NO';
const vals = Object.values(fruits);
for(const v of vals){
    if(v === 5){
        result = 'YES';
        break;
    }
}

console.log(result)