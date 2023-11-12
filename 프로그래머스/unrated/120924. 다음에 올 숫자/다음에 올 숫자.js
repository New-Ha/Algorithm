function solution(common) {
    const diff = []
    for(let i = 1; i < common.length; i++){
        diff.push(common[i] - common[i-1])
    }
    
    const vs = diff.reduce((acc, cur) => acc + cur, common[0])

    return diff[0] === diff[1] ? common[common.length-1] + diff[0] : common[common.length-1] * (diff[1] / diff[0])
}