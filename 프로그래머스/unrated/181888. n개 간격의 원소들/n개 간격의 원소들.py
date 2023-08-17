def solution(num_list, n):
    result = [];
    for i in range(len(num_list)):
        if i % n == 0:
            result.append(num_list[i]);
    return result;