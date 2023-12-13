function solution(k, m, score) {
    score.sort((a, b) => b - a);
    //ver 1
    // const package = [];
    // let start = 0
    // for(let i = m; i <= score.length; i += m){
    //     package.push(score.slice(start, i));
    //     start = i;
    // }
    // return package.reduce((acc, cur) => acc + (Math.min(...cur) * m), 0)
    
    //ver  2
    let revenue = 0;
    for(let i = m - 1; i < score.length; i += m){
        revenue += score[i] * m
    }
    return revenue
}