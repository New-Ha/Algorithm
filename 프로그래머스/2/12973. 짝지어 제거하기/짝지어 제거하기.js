function solution(s){
    // const sArr = s.split('').reverse();
    const stack = [];
    // stack.push(sArr.pop());
    
    for(let i = 0; i < s.length; i++){
        if(stack[stack.length - 1] == s[i]) stack.pop();
        else stack.push(s[i]);
    }
    
    // while(sArr.length > 0){
    //     const temp = sArr.pop();
    //     if(temp === stack[stack.length - 1]) stack.pop();
    //     else stack.push(temp);
    // }
  
    return Number(stack.length === 0)
}