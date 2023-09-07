function solution(s) {
    const strArr = s.split(' ');
    let sum = 0;
    
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === 'Z') sum += Number(strArr[i - 1]) * -1;
        else sum += Number(strArr[i]);
    }
    return sum
}