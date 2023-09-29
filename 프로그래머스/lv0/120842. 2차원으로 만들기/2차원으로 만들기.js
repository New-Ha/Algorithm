function solution(num_list, n) {
    // ver 1
    // return num_list.map((el, idx) => {
    //     if(idx % n === 0){
    //         return num_list.slice(idx, idx+n)
    //     }
    // }).filter(el => el !== undefined)
    
    //ver 2
    //const result = [];
    //for(let i = 0; i < num_list.length / n; i++){
    //    result.push(num_list.slice(n*i, n*i+n))
    //}
    //return result
    
    //ver 3
    return Array(num_list.length / n).fill([]).map((_, idx) => num_list.slice(n*idx, n*idx+n))
}