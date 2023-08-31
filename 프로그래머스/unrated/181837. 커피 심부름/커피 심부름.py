def solution(order):
    return sum(list(map(lambda el: 5000 if "cafelatte" in el else 4500, order)))