const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split('');
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const result = str.map(c => {
    let type = '';
    let idx = 0;
    if(upper.indexOf(c) > -1){
        type = 'lower';
        idx = upper.indexOf(c);
    } else {
        type = 'upper';
        idx = lower.indexOf(c);
    }
    
    if(type === 'upper'){
        return upper[idx]
    }else{
        return lower[idx]
    }
})

console.log(result.join(''))
