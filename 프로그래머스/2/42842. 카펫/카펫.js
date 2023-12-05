function solution(brown, yellow) {
    const area = brown + yellow
    const factors = [];
    for(let i = 2; i <= Math.floor(Math.sqrt(area)); i++){
        if(area % i === 0){
            if((i - 2) * (area / i - 2) === yellow){
                factors.push(area / i)
                factors.push(i)
            }
        }
    }
    return factors
}

