def solution(myString):
    # return list(map(lambda el: len(el), myString.split('x')))
    
    return [len(x) for x in myString.split('x')]