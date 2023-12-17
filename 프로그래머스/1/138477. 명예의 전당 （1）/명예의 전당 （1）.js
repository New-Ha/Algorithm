function solution(k, score) {
    const result = [];
    for(let i = 1; i <= score.length; i++){
        if(i <= k) result.push(Math.min(...score.slice(0, i)))
        else result.push(Math.min(...score.slice(0, i).sort((a, b) => b - a).splice(0, k)))
    }
    return result
}