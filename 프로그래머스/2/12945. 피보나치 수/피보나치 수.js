function solution(n) {
    if (n === 0) return 0;
    if(n === 1) return 1;
   
    const fibo = [0, 1];
    
    for(let i = 2; i <= n; i++){
        temp = (fibo[0] + fibo[1]) % 1234567;
        fibo[0] = fibo[1];
        fibo[1] = temp;
    }
    return fibo[1]
}