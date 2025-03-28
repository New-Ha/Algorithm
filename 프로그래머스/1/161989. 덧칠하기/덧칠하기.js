function solution(n, m, section) {
    section.sort((a, b) => a - b);
    let count = 1;
    let next = section[0] + m - 1;
    
    for(let i = 0; i < section.length; i++){
        if(section[i] <= next) {
            continue;
        } else {
            count++;
            next = section[i] + m - 1;
        }
    }
    return count
}

