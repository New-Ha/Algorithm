function solution(n) {
    const numArr = Array(n).fill(0).map((_, idx) => idx + 1);
    
    let result = 0;
    let start = 0;
    let end = 0;
    
    for(let i = 0; i < n; i++){
        let sum = 0;
        while(sum <= n && end < n){
            sum += numArr[end];
            
            if(sum === n){
                result++;
                break;
            }else if(sum > n){
                break;
            }else{
                end++
            }   
        }
        start++
        end = start
    }
    return result
}