function solution(n, words) {
    const visited = [words[0]];
    let pre = words[0][words[0].length - 1];
    
    for(let i = 1; i < words.length; i++){
        if(visited.includes(words[i])) return [i % n + 1, Math.floor(i / n) + 1]
        
        let next = words[i][0];
        if(pre === next) {
            visited.push(words[i])
            pre = words[i][words[i].length - 1]
        }
        else return [i % n + 1, Math.floor(i / n) + 1]
    }
    return [0, 0]
}