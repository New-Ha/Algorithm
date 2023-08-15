def solution(numbers, n):
    sum = 0
    for i in numbers:
        if sum + i <= n :
            sum += i
        elif sum + i > n :
            return sum + i