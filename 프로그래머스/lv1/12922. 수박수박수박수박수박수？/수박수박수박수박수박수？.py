def solution(n):
    return ''.join(["수" if x % 2 == 0 else "박" for x in range(n)])

    #return "수박" * (n//2) + "수" * (n%2)