def solution(dots):
    x = [];
    y = [];
    
    for dotX, dotY in dots:
        x.append(dotX);
        y.append(dotY);
    return abs((max(x) - min(x)) * (max(y) - min(y)));