const fs = require('fs');
const [A, op, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

if(op === '+'){
    const lenA = A.length;
    const lenB = B.length;

    if(lenA === lenB){
        console.log('2' + '0'.repeat(lenA - 1));
    } else {
        const maxLen = Math.max(lenA, lenB);
        const minLen = Math.min(lenA, lenB);
        const diff = maxLen - minLen;
        console.log('1' + '0'.repeat(diff - 1) + '1' + '0'.repeat(minLen - 1));
    }
} else {
    const len = A.length + B.length - 1;
    console.log('1'.padEnd(len, '0'));
}
