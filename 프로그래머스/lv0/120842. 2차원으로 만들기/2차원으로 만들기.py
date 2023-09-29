def solution(num_list, n):
    return [num_list[n * i:n*i+n] for i in range(len(num_list) // n)]