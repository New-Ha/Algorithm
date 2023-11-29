function solution(s) {
    let count = 0;
    let zero = 0;
    while(s.length > 1) {
        let newS = '';
        for(let i = 0; i < s.length; i++){
            if(s[i] === '0') zero++
            if(s[i] === '1') newS += '1'
        }
        newS = newS.length.toString(2)
        s = newS
        count++
    }
    return [count, zero]
}