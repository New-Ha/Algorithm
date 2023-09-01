def solution(quiz):
    def rightCal(el):
        [x, d, y, e, z] = el;
        if d == '+':
            return "O" if int(x) + int(y) == int(z) else "X"
        else:
            return "O" if int(x) - int(y) == int(z) else "X"
        
    return list(map(lambda el: rightCal(el), [i.split(' ') for i in quiz]))