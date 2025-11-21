const fs = require('fs');
const X = Number(fs.readFileSync(0, 'utf8').trim());

let line = 1;
let sum = 1;
while (sum < X) {
    line++;
    sum += line;
}

let numerator, denominator;
if (line % 2 === 1) { 
  numerator = line - (X - (sum - line) - 1);
  denominator = X - (sum - line);
} else {
  numerator = X - (sum - line);
  denominator = line - (X - (sum - line) - 1);
}

console.log(`${numerator}/${denominator}`);
