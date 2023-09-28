function solution(arr) {
    const powNum = new Array(10).fill().map((_, idx)=> (2 ** (idx+1))).filter(el => el >= arr.length)[0];
    const result = Array(powNum).fill(0).map((_, idx) => arr[idx] ? arr[idx] : 0);
    
    return arr.length === 1 ? arr : result
}   