def solution(absolutes, signs):
    # ver 1
    result = 0;
    for i in range(len(signs)):
        if signs[i]:
            result += absolutes[i];
        else:
            result -= absolutes[i];
    return result
    
    # ver 2
    # return sum(absolutes[i] * 1 if signs[i] else absolutes[i] * -1 for i in range(len(signs)))