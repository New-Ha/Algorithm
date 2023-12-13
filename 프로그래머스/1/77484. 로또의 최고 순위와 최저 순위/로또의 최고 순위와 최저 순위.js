function solution(lottos, win_nums) {
    //ver 1
//     let countZero = 0;
//     let countMatch = 0;
//     lottos.forEach(el => {
//         if(el === 0) countZero++;
//         if(win_nums.includes(el)) countMatch++;
//     })
    
//     if(countZero === 6) return [1, 6]
//     if(countMatch === 0) return [6, 6]
//     else return [7 - countMatch - countZero, 7 - countMatch]

    //ver2
    const rank = [6, 6, 5, 4, 3, 2, 1, 1]
    const zeroCount = lottos.filter(el => el === 0).length
    const matchCount = lottos.filter(el => win_nums.includes(el)).length
    return [rank[zeroCount + matchCount], rank[matchCount]]
}