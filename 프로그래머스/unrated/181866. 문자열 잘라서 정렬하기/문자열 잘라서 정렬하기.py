def solution(myString):
    # return list(filter(str, sorted(myString.split('x'))))

    return sorted(s for s in myString.split('x') if s)