def solution(n):
    # if n < 4: return 0
    # result = n // 2 - 1;
    # for i in range(5, n + 1, 2):
    #     temp = 0;
    #     for j in range(1, i + 1):
    #         if i % j == 0: temp += 1;
    #         if temp == 3:
    #             result += 1;
    #             break;
    # return result
    
    output = 0
    for i in range(4, n + 1):
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                output += 1
                break
    return output