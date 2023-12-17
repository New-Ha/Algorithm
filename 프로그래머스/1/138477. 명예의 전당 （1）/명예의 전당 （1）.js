function solution(k, score) {
    const result = [];
    for(let i = 1; i <= score.length; i++){
        let temp = score.slice(0, i).sort((a, b) => b - a)
        if(i <= k) result.push(temp[i - 1]);
        else result.push(temp[k - 1])
    }
    return result
}