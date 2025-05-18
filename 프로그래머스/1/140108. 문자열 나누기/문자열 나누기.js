function solution(s) {
    let wordCount = 0;
    let targetChar = '';
    let sameCount = 0;
    let diffCount = 0;

    for(const char of s) {
        if(!sameCount) {
            targetChar = char;
        }

        if(char === targetChar) {
            sameCount++;
        } else {
            diffCount++;
        }
        
        if(sameCount === diffCount) {
            wordCount++;
            sameCount = 0;
            diffCount = 0;
        }
    }
    
    if (sameCount || diffCount) wordCount++;
    
    return wordCount
}