function solution(s) {
    const visit = [];
    const result = [];

    for(let i = 0; i < s.length; i++){
        if(!visit.includes(s[i])){
            visit.push(s[i]);
            result.push(-1);
        }else{
            result.push(i - visit.lastIndexOf(s[i]));
            visit.push(s[i]);
        }
    }
    return result
}