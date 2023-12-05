def solution(brown, yellow):
    area = brown + yellow
    factors = [];
    for i in range(2, int(area ** 0.5) + 1):
        if area % i == 0:
            factors.append(i)
    result = [area / i for i in factors if (i - 2) * (area / i - 2) == yellow]
    return [result[0], area / result[0]]