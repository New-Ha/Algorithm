def solution(num, total):
    start = (total // num) - ((num - 1) // 2);
    end = (total // num) + ((num - 1) // 2);
    result = [i for i in range(start, end + 1)];
    if sum(result) < total: result.append(total - sum(result));
    return result