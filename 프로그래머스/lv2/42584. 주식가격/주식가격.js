function solution(prices) {
    //ver 1 : 이중 for 문
    const result = [];
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[i] > prices[j]){
                result.push(j - i);
                break;
            }else if(prices[i] <= prices[j] && j === prices.length -1){
                result.push(j - i);
            }
        }
    }
    result.push(0)
    return result
}