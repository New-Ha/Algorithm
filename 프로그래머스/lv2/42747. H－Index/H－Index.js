function solution(citations) {
    const count = new Array(Math.max(...citations) + 1).fill(0);
    let answer = 0;
    citations.forEach(el => count[el] += 1)
    
    for(let i = 0; i < count.length; i++){
        let less = count.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0);
        let more = count.slice(i).reduce((acc, cur) => acc + cur, 0);
        // if(less > more) return i - 1;
        if (i > more) break;
        
        answer = i;
        
        // if(less === more) return i;
    }
    
    return answer;
}