def solution(emergency):
    rank = sorted(emergency, reverse = True)
    return list(map(lambda el: rank.index(el) + 1, emergency))