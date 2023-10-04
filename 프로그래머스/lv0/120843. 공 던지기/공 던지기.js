function solution(numbers, k) {
    let count = 1;
    while(count < k){
        for(let i = 0; ;i +=2){
            i %= numbers.length;
            if(count === k) return numbers[i];
            count++;
        }
    }
}