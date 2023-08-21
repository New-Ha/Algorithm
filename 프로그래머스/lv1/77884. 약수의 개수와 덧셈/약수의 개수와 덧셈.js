// function boolDivisor(n) {
//     let count = 0;
//     for(let i = 1; i <= n; i++){
//         if(n % i === 0) count++
//     }
//     return count % 2 == 0 ? 1 : -1
// }

function solution(left, right) {
    // const rangeNum = [];
    // for(let i = left; i <= right; i++){
    //     rangeNum.push(i)
    // }
    // return rangeNum.reduce((acc, cur) => acc + (cur * boolDivisor(cur)), 0)
    
    let result = 0;
    for(let i = left; i <= right; i++){
        let count = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0) count++
        }
        if(count % 2 === 0) result += i
        else result -= i
    }
    return result
}