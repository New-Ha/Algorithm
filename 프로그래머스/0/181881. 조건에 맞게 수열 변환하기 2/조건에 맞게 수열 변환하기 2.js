function solution(arr) {
    let count = 0;
    let check = 0;
    
    while(check !== arr.length){
        check = 0;
        count++
        const temp = arr.map(el => el >= 50 && el % 2 === 0 ? el / 2 
                         : el < 50 && el % 2 === 1 ? el * 2 + 1 : el)
        arr.forEach((el, idx) => el === temp[idx] ? check += 1 : check += 0)
        arr = temp
    }
    return count - 1;
}