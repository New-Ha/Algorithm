function solution(n) {
    const oneCount = n.toString(2).split('').filter(el => el === '1').length;
    let result = n + 1;
    
    while(result > n){
        let temp = result.toString(2).split('').filter(el => el === '1').length;
        if(oneCount === temp) return result
        else result++
    }
}