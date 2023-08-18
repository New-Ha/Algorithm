function solution(arr, n) {
//     const len = arr.length
//     if(len % 2 === 1){
//         return arr.map((el, idx) => idx % 2 === 0 ? el + n : el)
//     }else{
//         return arr.map((el, idx) => idx % 2 === 1 ? el + n : el)
//     }
    
    return arr.map((el, idx) => arr.length % 2 === 1 ? (idx % 2 === 0 ? el + n : el) : (idx % 2 === 1 ? el + n : el))
}