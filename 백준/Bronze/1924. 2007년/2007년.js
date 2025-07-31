const fs = require('fs');
const [m, d] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const md = [31,28,31,30,31,30,31,31,30,31,30,31];
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

if(m === 1){
    console.log(days[d % 7]);
} else {
    let result = 0;
    for(let i = 0; i < m - 1; i++){
        result += md[i]
    }
    console.log(days[(result + d) % 7])
}
