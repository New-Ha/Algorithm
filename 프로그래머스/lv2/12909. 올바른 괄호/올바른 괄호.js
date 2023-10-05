function solution(s){
    if(s[0] === ')' || s[s.length - 1] === '(') return false;
    
    const stack = [];
    for(let i of s){
        if(i === '(') stack.push(i);
        else stack.pop();
    }
    return stack.length === 0
}