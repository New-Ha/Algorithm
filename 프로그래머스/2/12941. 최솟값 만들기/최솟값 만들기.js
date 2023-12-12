function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    let sum = 0;
    A.forEach((el, idx) => sum += el * B[idx]);
    return sum
}