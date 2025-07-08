const fs = require('fs');
const [n, ...books] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = new Map();
for(const book of books){
    count.set(book, (count.get(book) || 0) + 1);
}

let result = '';
let max = -1;

for (const [book, num] of count.entries()) {
  if (num > max) {
    max = num;
    result = book;
  } else if (num === max && book < result) {
    result = book;
  }
}

console.log(result)