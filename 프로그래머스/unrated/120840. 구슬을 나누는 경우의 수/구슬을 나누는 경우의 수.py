def solution(balls, share):
    n = 1;
    for i in range(balls, 0, -1):
        if i == share: break;
        n *= i;
    m = 1;
    ran = balls - share;
    for j in range(ran, 0, -1):
        m *= j;
    return round(n / m)
        
   