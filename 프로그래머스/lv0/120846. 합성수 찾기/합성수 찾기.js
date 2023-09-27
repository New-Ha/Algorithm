function solution(n) {
    // 3이하의 수는 합성수일 수 없다.
    if(n < 4) return 0;
    // 4이상의 모든 짝수는 합성수이다.
    let result = Math.floor(n / 2) - 1;
    // 홀수의 합성수만 검사한다.
    for(let i = 5; i <= n; i += 2){
        let temp = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0) temp++;
            if(temp === 3){
                result++;
                break;
            }
        }
    }
    return result
}