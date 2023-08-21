function boolDivisor(n) {
    const divisorNum = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) divisorNum.push(i)
    }
    return divisorNum.length % 2 == 0 ? 1 : -1
}

function solution(left, right) {
    const rangeNum = [];
    for(let i = left; i <= right; i++){
        rangeNum.push(i)
    }
    const divisorResult = [...rangeNum].map(el => boolDivisor(el) )
    return rangeNum.reduce((acc, cur, idx) => acc + (cur * divisorResult[idx]), 0)
}