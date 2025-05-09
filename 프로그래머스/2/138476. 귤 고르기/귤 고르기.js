function solution(k, tangerine) {
    const map = new Map();
    
    for(const size of tangerine){
        map.set(size, (map.get(size) || 0) + 1)
    }
    
    let count = 0;
    let sort = 0;
    const sortedTangerine = Array.from(map.values()).sort((a, b) => b - a);
    for(const tCount of sortedTangerine){
        count += tCount;
        sort++;
        if(count >= k) break;
    }
    
    return sort;
}