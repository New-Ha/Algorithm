def solution(num_list):
    result = [0, 0];
    for i in num_list:
        result[i % 2] += 1;
    return result