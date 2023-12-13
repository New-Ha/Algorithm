def getDecimals(num):
    nums = 0;
    for i in range(1, int(num ** 0.5) + 1):
        if num % i == 0: nums += 2;
        if num / i == i: nums -= 1
    return nums

def solution(number, limit, power):
    # ver 2
    return sum([power if getDecimals(i + 1) > limit else getDecimals(i + 1) for i in range(number)])
    
    # ver 1
    # steel = 0;
    # for i in range(number):
    #     decimals = getDecimals(i + 1);
    #     if decimals > limit: steel += power
    #     else: steel += decimals
    # return steel
        
