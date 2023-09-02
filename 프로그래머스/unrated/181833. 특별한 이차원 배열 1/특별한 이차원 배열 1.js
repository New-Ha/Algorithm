function solution(n) {
    //ver 1
    return result = Array(n).fill(0)
        .map((_, i) => Array(n).fill(0).map((el, idx) => i === idx ? el = 1 : el))
    
    //ver 2
    // const result = [];
    // for(let i = 0; i < n; i++){
    //     result.push([]);
    //     for(let j = 0; j < n; j++){
    //         i === j ? result[i].push(1) : result[i].push(0);
    //     }
    // }
    // return result
}