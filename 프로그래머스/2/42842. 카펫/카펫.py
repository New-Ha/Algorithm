def solution(brown, yellow):
    area = brown + yellow
    factors = [];
    for i in range(2, int(area ** 0.5) + 1):
        if area % i == 0:
            if (i - 2) * (area / i - 2) == yellow:
                factors.append(area // i)
                factors.append(i)
    return factors