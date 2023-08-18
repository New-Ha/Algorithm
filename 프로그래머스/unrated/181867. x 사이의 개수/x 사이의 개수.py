def solution(myString):
    return list(map(lambda el: len(el), myString.split('x')))