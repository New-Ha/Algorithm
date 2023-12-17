def solution(k, score):
    result = [];
    for i in range(1, len(score) + 1):
        temp = sorted(score[0:i], reverse = True)
        if i <= k: result.append(temp[-1])
        else: result.append(temp[k-1])
    return result