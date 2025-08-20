const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString().trim();

if(N.startsWith('0x')){
    console.log(parseInt(N, 16))
} else if(N.length > 1 && N.startsWith('0')){
    console.log(parseInt(N, 8))
} else {
    console.log(N)
}