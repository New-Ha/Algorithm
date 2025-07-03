const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n# 0');

const getState = (caseNum, o, w, alive) => {
    if (!alive || w <= 0){
        console.log(`${caseNum} RIP`);
    } else if(w > (o * 0.5) && w < (o * 2)){
        console.log(`${caseNum} :-)`);
    } else {
        console.log(`${caseNum} :-(`);
    }
}

for(let i = 0; i < input.length - 1; i++){
    const scenario = input[i].trim().split('\n');
    let [o, w] = scenario[0].split(' ').map(Number);
    let alive = true;

    for(let j = 1; j < scenario.length; j++){
        const [act, n] = scenario[j].split(' ');
        const num = Number(n);

        if(act === 'E'){
            w -= num;
        } else if(act === 'F'){
            w += num;
        }

        if (w <= 0) alive = false;
    }

    getState(i + 1, o, w, alive);
}
