function solution(num) {
    //ver 1
    // let count = 0;
    // while(num !== 1){
    //     if(num%2 === 0){
    //         num /= 2
    //         count++
    //     }
    //     else if(num%2 === 1){
    //         num = num*3+1
    //         count++
    //     }
    // }
    // return count >= 500 ? -1 : count
    
    //ver 2
    let count = 0;
    while(num !== 1 && count < 500){
        num%2 === 0 ? num /= 2 : num= num*3+1
        count++
    }
    return num === 1 ? count : -1
}