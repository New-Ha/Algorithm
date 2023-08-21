def solution(left, right):
    # result = 0;
    # for i in range(left, right + 1):
    #     count = 1;
    #     for j in range (2, i + 1):
    #         if i % j == 0: count += 1;
    #     if count % 2 == 0: result += i;
    #     else: result -= i;
    # return result
    
    def calcDivisor(n):
        count = 0;
        for i in range(1, n + 1):
            if n % i == 0: count += 1;
        return n if count % 2 == 0 else -n
    
    return sum(list(map(calcDivisor, [x for x in range(left, right + 1)])))