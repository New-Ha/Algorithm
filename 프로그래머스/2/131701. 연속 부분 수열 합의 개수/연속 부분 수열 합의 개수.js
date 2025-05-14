function solution(elements) {
    const len = elements.length;
    elements.push(...elements);
    const count = new Set();
    
    for(let i = 1; i <= len; i++){
        let sum = elements.slice(0, i).reduce((a, b) => a + b, 0);   
        count.add(sum);
        
        for(let j = 1; j < len; j++){
            sum = sum - elements[j - 1] + elements[j + i - 1];
            count.add(sum)
        }
    }
    return count.size;
}