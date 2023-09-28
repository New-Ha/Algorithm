function solution(arr) {
    // const powNum = new Array(10).fill().map((_, idx)=> (2 ** (idx+1))).filter(el => el >= arr.length)[0];
    
    const lenNum = 2 ** Math.ceil(Math.log2(arr.length));
    const result = Array(lenNum).fill(0).map((_, idx) => arr[idx] ? arr[idx] : 0);
    
    return arr.length === 1 ? arr : result
}   