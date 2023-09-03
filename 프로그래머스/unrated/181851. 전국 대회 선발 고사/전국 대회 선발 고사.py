def solution(rank, attendance):
    possible = sorted([[a, rank.index(a)] for a, b in zip(rank, attendance) if b == True ], key = lambda x: x[0]);
    return 10000 * possible[0][1] + 100 * possible[1][1] + possible[2][1]