function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    let count = 0;
    for(let i of d){
        if(budget - i >= 0){
            budget -= i;
            count++;
        }else break;
    }
    return count
}