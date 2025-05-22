function solution(land) {
    let firMax = -1;
    let firIdx = -1;
    let secMax = -1;
    
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < 4; j++) {
            const val = land[i - 1][j];
            if(val > firMax) {
                secMax = firMax;
                firMax = val;
                firIdx = j;
            } else if(val > secMax) {
                secMax = val;
            }
        }

        for(let j = 0; j < 4; j++){
            land[i][j] += (j === firIdx ? secMax : firMax);
        }
    }
    
    return Math.max(...land[land.length - 1]);
}