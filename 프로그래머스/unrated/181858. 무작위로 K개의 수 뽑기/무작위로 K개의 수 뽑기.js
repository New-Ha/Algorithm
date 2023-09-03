function solution(arr, k) {
    const kindNum = [...new Set(arr)];
    return kindNum.length < k ? [...kindNum, ...Array(k-kindNum.length).fill(-1)] : kindNum.slice(0,k)
    
}