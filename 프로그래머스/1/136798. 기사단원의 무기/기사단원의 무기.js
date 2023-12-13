function getDecimals(num) {
    let nums = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0) nums += 2
        if(num / i === i) nums -= 1
    }
    return nums
}

function solution(number, limit, power) {
    return Array(number).fill(0).reduce((acc, _, idx) => {
        let decimals = getDecimals(idx + 1);
        return decimals > limit ? acc + power : acc + decimals
    }, 0)
}