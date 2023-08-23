def solution(myString):
    return list(filter(str, sorted(myString.split('x'))))