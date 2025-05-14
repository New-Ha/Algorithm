function solution(n,a,b){
    let result = 0;
    
    while(a !== b){
        a = Math.round(a / 2);
        b = Math.round(b / 2);
        result++;
        
        if(a === b) return result
    }
    
}