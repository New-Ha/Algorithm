def solution(numlist, n):
     return [x[1] for x in sorted(list(map(lambda el: [abs(n - el), el], numlist)), key = lambda x : (x[0], -x[1]))]
    
    