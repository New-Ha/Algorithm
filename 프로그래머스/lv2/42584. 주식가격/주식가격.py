def solution(prices):
    result = [0] * len(prices);
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            if prices[i] <= prices[j]:
                result[i] += 1;
            else:
                result[i] += 1
                break;
    return result

