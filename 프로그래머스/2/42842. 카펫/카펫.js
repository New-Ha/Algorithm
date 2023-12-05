function solution(brown, yellow) {
    const erea = brown + yellow
    const factors = [];
    for(let i = 2; i <= Math.floor(Math.sqrt(erea)); i++){
        if(erea % i === 0) factors.push(i)
    }
    const filtered = factors.filter(el => (el - 2) * (erea / el - 2) === yellow);
    return [erea / filtered[0], filtered[0]]
}