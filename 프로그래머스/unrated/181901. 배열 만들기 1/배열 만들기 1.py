def solution(n, k):
    # result = [];
    # for i in range(k, n + 1):
    #     if i % k == 0: result.append(i);
    # return result
    
    return [x for x in range(k, n + 1) if x % k == 0]