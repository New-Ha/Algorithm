const fs = require('fs');
const [n, ...strings] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(const str of strings){
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
}