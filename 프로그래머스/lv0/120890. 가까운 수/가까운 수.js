function solution(array, n) {
//     let sorted = array.sort((a,b) => a-b);
//     let abs = sorted.map((el) => Math.abs(n-el));
//     return array[abs.indexOf(Math.min(...abs))] 
    
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
    return array[0]
}