def solution(prices):
    result = [];
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            if prices[i] > prices[j]:
                result.append(j - i);
                break;
            elif j == len(prices) - 1:
                result.append(j - i);
    result.append(0);
    return result


