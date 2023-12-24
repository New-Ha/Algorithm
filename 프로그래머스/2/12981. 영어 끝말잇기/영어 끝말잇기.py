def solution(n, words):
    visited = [words[0]];
    pre = words[0][-1];
    
    for i in range(1, len(words)):
        if words[i] in visited: return [i % n + 1, i // n + 1]
    
        next = words[i][0];
        if pre == next: 
            visited.append(words[i]);
            pre = words[i][-1];
        else: return [i % n + 1, i // n + 1]
    
    return [0, 0]