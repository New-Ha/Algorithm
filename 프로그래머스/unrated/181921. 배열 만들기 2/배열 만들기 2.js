function solution(l, r) {
    const result = []
    for(let i = l; i <= r; i++){
        let temp = String(i).split('')
        let isFive = temp.map(el => el === '0' || el === '5' ? true : false)
        if(isFive.includes(false)) continue;
        else result.push(i)
    }

    return result.length === 0 ? [-1] : result
}