const fs = require('fs');
const words = fs.readFileSync(0).toString().trim().split(' ');
const except = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];
let result = words[0][0].toUpperCase();
for(let i = 1; i < words.length; i++){
    if(!except.includes(words[i])){
        result += words[i][0].toUpperCase();
    }
}

console.log(result)