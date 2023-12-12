function solution(lottos, win_nums) {
    let countZero = 0;
    let countMatch = 0;
    lottos.forEach(el => {
        if(el === 0) countZero++;
        if(win_nums.includes(el)) countMatch++;
    })
    
    if(countZero === 6) return [1, 6]
    if(countMatch === 0) return [6, 6]
    else return [7 - countMatch - countZero, 7 - countMatch]

}