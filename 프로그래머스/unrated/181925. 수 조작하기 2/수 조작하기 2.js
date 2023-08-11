function solution(numLog) {
    let result = '';
    let memo = numLog[0];
    
    for(let i of numLog) {
        if(i === memo+1) {
            result += 'w'
            memo = i;
        }else if(i === memo-1) {
            result += 's'
            memo = i
        }else if(i === memo+10) {
            result += 'd'
            memo = i
        }else if(i === memo-10){
            result += 'a'
            memo = i
        }
    }
    return result
}