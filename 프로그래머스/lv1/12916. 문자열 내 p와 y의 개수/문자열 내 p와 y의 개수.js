function solution(s){
    // const pNum = s.toLowerCase().split('').filter(el => el === 'p');
    // const yNum = s.toLowerCase().split('').filter(el => el === 'y');
    // return pNum.length === yNum.length
    
    const str = s.toLowerCase()
    return str.split('p').length === str.split('y').length
}