function solution(rny_string) {
    //ver 1
    // let result = '';
    // for(let i of rny_string){
    //     if(i === 'm') result += 'rn'
    //     else result += i
    // }
    // return result
    
    return rny_string.split('').reduce((acc, cur) => cur === 'm' ? acc + 'rn' : acc + cur, '')
}