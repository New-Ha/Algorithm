function solution(num_list, n) {
    return num_list.map((el, idx) => {
        if(idx % n === 0){
            return num_list.slice(idx, idx+n)
        }
    }).filter(el => el !== undefined)
    
    // return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}