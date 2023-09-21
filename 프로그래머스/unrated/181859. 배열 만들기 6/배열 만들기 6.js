function solution(arr) {
    const stk = [arr[0]];
    let i = 1;
    
    while(i < arr.length){
        if(stk[stk.length - 1] === arr[i]) stk.pop();
        else stk.push(arr[i]);
        i++;
    }
    return stk.length === 0 ? [-1] : stk
}