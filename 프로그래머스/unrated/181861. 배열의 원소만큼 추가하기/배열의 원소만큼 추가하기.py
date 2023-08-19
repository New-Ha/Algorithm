def solution(arr):
    X = []
    for i in arr:
        for j in range(i):
            X.append(i)
    return X

    #return [i for i in arr for j in range(i)]