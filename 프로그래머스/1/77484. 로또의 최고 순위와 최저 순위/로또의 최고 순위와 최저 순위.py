def solution(lottos, win_nums):
    rank = [6, 6, 5, 4, 3, 2, 1, 1];
    zeroCount = len([i for i in lottos if i == 0]);
    matchCount = len([i for i in lottos if i in win_nums]);
    return [rank[zeroCount + matchCount], rank[matchCount]]