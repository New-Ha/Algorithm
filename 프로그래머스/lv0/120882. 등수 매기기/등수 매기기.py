def solution(score):
    average = list(map(lambda el: (el[0] + el[1]) / 2, score));
    rank = sorted(average[:], reverse=True);
    return list(map(lambda el: rank.index(el) + 1, average))