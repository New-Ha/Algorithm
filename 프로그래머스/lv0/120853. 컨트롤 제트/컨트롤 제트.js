function solution(s) {
    //ver 1
    // const strArr = s.split(' ');
    // strArr.filter((el, idx) => el === 'Z' ? strArr[idx - 1] = '' : el)
    // return strArr.reduce((acc, cur) => cur !== 'Z' ? acc + Number(cur) : acc, 0)
    
    //ver 2
    const strArr = s.split(' ');
    let sum = 0;
    
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === 'Z') sum += Number(strArr[i - 1]) * -1;
        else sum += Number(strArr[i]);
    }
    return sum
}