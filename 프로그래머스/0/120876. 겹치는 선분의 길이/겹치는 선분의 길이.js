function solution(lines) {   
    const pointMap = new Map();
    
    for(const [start, end] of lines){
        for(let i = start + 1; i <= end; i++){
            pointMap.set(i, (pointMap.get(i) || 0) + 1)
        }
    }

    return [...pointMap.values()].filter(count => count > 1).length;
}