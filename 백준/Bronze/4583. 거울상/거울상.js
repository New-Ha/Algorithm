const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const mirrorChar = {
  b: 'd',
  d: 'b',
  p: 'q',
  q: 'p',
  i: 'i',
  o: 'o',
  v: 'v',
  w: 'w',
  x: 'x'
};

const mirror = (str) => {
  if ([...str].some(ch => !(ch in mirrorChar))) return 'INVALID';
  return [...str].reverse().map(ch => mirrorChar[ch]).join('');
};

const result = [];
for(const line of input){
    if(line === '#') break;
    result.push(mirror(line))
}

console.log(result.join('\n'));