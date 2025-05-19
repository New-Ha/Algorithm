function solution(s, skip, index) {
    let alpa = 'abcdefghijklmnopqrstuvwxyz'
    for(const char of skip){
        const idx = alpa.indexOf(char)
        alpa = alpa.slice(0, idx) + alpa.slice(idx + 1)
    }

    let result = '';
    for(const char of s){
        const idx = alpa.indexOf(char)
        const newIdx = (idx + index) % alpa.length;
        result += alpa[newIdx];
    }
    
    return result
}