const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = input.slice(0, -1);

const cal = (n) => {
    let width = n.length + 1;
    for(const ch of [...n]){
        if(ch === '0'){
            width += 4;
        } else if(ch === '1'){
            width += 2;
        } else {
            width += 3;
        }
    }
    console.log(width);
}

for(const num of nums){
    cal(num)
}