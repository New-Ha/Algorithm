function solution(start, end) {
    //ver 1
    // const result = [];
    // for(let i = start; i <= end; i++){
    //     result.push(i)
    // }
    // return result
    
    //ver 2
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx )
}