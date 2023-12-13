function solution(k, m, score) {
    score.sort((a, b) => b - a);
    
    const package = [];
    let start = 0
    for(let i = m; i <= score.length; i += m){
        package.push(score.slice(start, i));
        start = i;
    }
    return package.reduce((acc, cur) => acc + (Math.min(...cur) * m), 0)
}