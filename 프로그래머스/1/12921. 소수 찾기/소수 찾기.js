function solution(n) {
    const arr = Array(n + 1).fill(0).map((_, i) => i >= 2 ? i : 0)
    for(let i = 2; i <= Math.sqrt(n); i++){
        for(let j = i * 2; j < arr.length; j += i){
            if(arr[j] === 0) continue;
            if(arr[j] % i === 0) arr[j] = 0
        }
    }
    return arr.filter(el => el !== 0).length
}