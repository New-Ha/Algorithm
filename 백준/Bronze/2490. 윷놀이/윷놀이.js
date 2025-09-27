const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const resultMap = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  0: 'E',
};

for(const line of input){
    const nums = line.split(' ').map(Number);
    const zeroCount = nums.filter(n => n === 0).length;
    console.log(resultMap[zeroCount]);
}