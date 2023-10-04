function solution(numbers, k) {
//     let count = 1;
//     while(count < k){
//         for(let i = 0; ;i +=2){
//             i %= numbers.length;
//             if(count === k) return numbers[i];
//             count++;
//         }
//     }
    
    let idx = 0
    for(let count = 1; count < k; count++){
        idx += 2;
        if(idx > numbers.length){
            idx %= numbers.length
        }
    }
    return numbers[idx];
}