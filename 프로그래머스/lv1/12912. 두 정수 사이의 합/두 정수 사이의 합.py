def solution(a, b):
    # return sum([x for x in range(min(a, b), max(a, b) + 1 )])
    
    if a > b:
        a, b = b, a
    return sum(range(a, b + 1))