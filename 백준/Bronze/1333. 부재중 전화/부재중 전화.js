const fs = require('fs');
const [N, L, D] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const playing = [];
for(let i = 0; i < N; i++){
    for(let j = 0; j < L; j++){
        playing.push(true);
    }
    for(let j = 0; j < 5; j++){
        playing.push(false);
    }
}

let sec = 0;
while(true){
    if(sec >= playing.length){
        break;
    }
    if(playing[sec] === false){
        break;
    }
    
    sec += D;
}

console.log(sec)