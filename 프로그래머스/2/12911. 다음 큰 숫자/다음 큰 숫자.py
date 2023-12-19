def solution(n):
    oneCount = len([i for i in list(format(n, 'b')) if i == '1']);
    
    result = n + 1;
    while True:
        temp = len([i for i in list(format(result, 'b')) if i == '1']);
        if oneCount == temp: return result
        else: result += 1