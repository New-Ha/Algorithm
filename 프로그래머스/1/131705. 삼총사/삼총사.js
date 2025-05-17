function solution(n) {
    let count = 0;
    
    const combination = (start, picked) => {
        if(picked.length === 3){
            const sum = picked.reduce((a, c) => a + c, 0);
            if(sum === 0) count++;
            return;
        }

        for(let i = start; i < n.length; i++) {
            combination(i + 1, [...picked, n[i]]);
        }
    }
    
    combination(0, []);

    return count;
}