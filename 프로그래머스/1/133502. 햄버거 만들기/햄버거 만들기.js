function solution(ingredient) {
    let count = 0;
    const stack = [];
    
    for(let i of ingredient){
        stack.push(i);
        if(stack.length >= 4 && stack.slice(-4).join('') === '1231'){
            count++;
            for(let i = 0; i < 4; i++){
                stack.pop();
            }
        }
    }
    
    return count
}