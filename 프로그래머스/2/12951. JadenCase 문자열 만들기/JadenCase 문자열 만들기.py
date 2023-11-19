def solution(s):
    return ' '.join(list(map(lambda el: el[0: 1].upper() + el[1:], s.lower().split(' '))))
    
        