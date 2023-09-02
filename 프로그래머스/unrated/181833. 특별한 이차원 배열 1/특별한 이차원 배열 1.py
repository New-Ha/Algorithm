def solution(n):
    # return [[1 if i == j else 0 for i in range(n)] for j in range(n)]

    result =[[0]*n for i in range(n)]
    for i in range(n): 
        result[i][i]=1
    return result