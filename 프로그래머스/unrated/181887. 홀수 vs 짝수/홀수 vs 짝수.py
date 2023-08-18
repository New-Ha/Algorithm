def solution(num_list):
    oddSum = sum(num_list[i] for i in range(len(num_list)) if i % 2 == 0)
    evenSum = sum(num_list[i] for i in range(len(num_list)) if i % 2 == 1)
    return max(oddSum, evenSum)