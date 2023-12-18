def solution(s):
    visit = '';
    result = [];
    
    for i in range(len(s)):
        if s[i] in visit:
            result.append(i - visit.rfind(s[i]));
            visit += s[i];
        else:
            result.append(-1);
            visit += s[i];
    return result
            