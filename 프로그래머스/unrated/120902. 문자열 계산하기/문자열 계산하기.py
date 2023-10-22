def solution(my_string):
    str = my_string.split(' ');
    answer = int(str[0]);
    
    for i in range(len(str)):
        if str[i] == '+': answer += int(str[i+1]);
        if str[i] == '-': answer -= int(str[i+1]);
    
    return answer