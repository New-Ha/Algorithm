def solution(citations):
    count = [0] * (max(citations) + 1);
    for x in citations:
        count[x] += 1;
    
    answer = 0;
    for i in range(len(count)):
        less = sum(count[0: i+1]);
        more = sum(count[i:]);
        if i > more: break;
        answer = i;
    return answer

