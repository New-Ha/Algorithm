def solution(n, control):
    direction = {"w": 1, "s": -1, "d": 10, "a": -10}
    control = list(map(lambda el: direction[el], control))
    return sum(control, n)