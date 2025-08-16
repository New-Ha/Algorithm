const fs = require('fs');
const [T, ...Ns] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cal = (s) => {
    const n = Number(s);
    const rN = Number(s.split('').reverse().join(''));
    return String(n + rN);
}

const yesOrNo = (s) => {
    const sum = cal(s);
    
    let left = 0;
    let right = sum.length - 1;
    let result = true;
    while(left < right){
        if(sum[left] !== sum[right]){
            result = false;
            break;
        } else {
            left++;
            right--;
        }
    }
    return result ? 'YES' : 'NO'
}

for(const n of Ns){
    console.log(yesOrNo(n))
}