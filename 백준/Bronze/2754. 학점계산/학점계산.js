const fs = require('fs');
const score = fs.readFileSync('/dev/stdin').toString().trim();

if (score === 'F') {
    console.log('0.0');
} else {
    const base = { 'A': 4, 'B': 3, 'C': 2, 'D': 1 };
    let result = base[score[0]];
    
    if (score[1] === '+') result += 0.3;
    else if (score[1] === '-') result -= 0.3;

    console.log(result.toFixed(1));
}