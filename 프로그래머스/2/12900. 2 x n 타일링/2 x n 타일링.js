function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    let result = 0;
    let a = 0;
    let b = 0;
    
    a = 1;
    b = 2;

    for(let i = 3; i <= n; i++){
        result = (a + b) % 1_000_000_007;
        a = b;
        b = result;
    }
    
    return result
}