const fs = require('fs');
const score = fs.readFileSync('/dev/stdin').toString().trim();

if (score === 'F') {
    console.log('0.0');
} else {
    const [base, option] = score.split('')
    const bases = { 'A': 4, 'B': 3, 'C': 2, 'D': 1 };
    const options = {'+' : 0.3, '0': 0, '-': -0.3};
    
    const result = bases[base] + options[option];
    console.log(result.toFixed(1));
}