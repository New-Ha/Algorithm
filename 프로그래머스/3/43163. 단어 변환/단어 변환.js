function isOneLetterDiff(word1, word2) {
    let diffCount = 0;
    
    for(let i = 0; i < word1.length; i++){
        if(word1[i] !== word2[i]) diffCount++;
        if(diffCount > 1) return false;
    }
    
    return diffCount === 1;
}

function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const q = [[begin, 0]];
    let count = 0;
    
    while(q.length !== 0){
        const [curWord, step] = q.shift();
        
        if(curWord === target) return step;
        
        for(let word of words){
            if(isOneLetterDiff(curWord, word)) q.push([word, step + 1]);
        }
    }
        
    return 0;
}