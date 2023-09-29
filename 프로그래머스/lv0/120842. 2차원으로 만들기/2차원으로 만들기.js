function solution(num_list, n) {
    // ver 1
    // return num_list.map((el, idx) => {
    //     if(idx % n === 0){
    //         return num_list.slice(idx, idx+n)
    //     }
    // }).filter(el => el !== undefined)
    
    //ver 2
    const result = [];
    for(let i = 0; i < num_list.length / n; i++){
        result.push(num_list.slice(n*i, n*i+n))
    }
    return result
    
    // return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
    
}