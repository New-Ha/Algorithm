const fs = require('fs');
const [m, d] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
if(m < 2 || (m === 2 && d < 18)){
    console.log("Before")
}else if(m > 2 || (m === 2 && d > 18)){
    console.log("After")
}else{
    console.log("Special")
}