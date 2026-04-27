const fs = require('fs'); 
const [l, s] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

function getMessage(l, s) {
    if (l >= s) {
        return "Congratulations, you are within the speed limit!";
    }

    const diff = s - l;
    let f = 0;

    if (diff <= 20) f = 100;
    else if (diff <= 30) f = 270;
    else f = 500;

    return "You are speeding and your fine is $" + f + '.';
}

console.log(getMessage(l, s));