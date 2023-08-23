def solution(money):
    ame = money // 5500
    return [ame, money - (5500 * ame)]