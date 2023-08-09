def solution(num_list):
    oddX = '';
    evenX = '';
    for i in num_list:
        if i % 2 == 0:
            evenX += str(i)
        else:
            oddX += str(i)
    return int(evenX) + int(oddX)