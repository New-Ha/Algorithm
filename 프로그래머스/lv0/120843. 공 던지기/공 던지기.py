def solution(numbers, k):
    idx = 0;
    for _ in range(1, k):
        idx += 2;
        if idx > len(numbers):
            idx %= len(numbers);
    return numbers[idx]