function solution(num, total) {
    const start = parseInt(total/num) - parseInt((num-1)/2);
    const end = parseInt(total/num) + parseInt((num-1)/2);
    const result = [];
    
    let sum = 0;
    for(let i = start; i <= end; i++){
        result.push(i);
        sum += i;
    }
    if(sum < total) result.push(total-sum);
    
    return result;
}