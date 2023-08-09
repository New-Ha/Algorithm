def solution(num_list):
    oddX = [];
    evenX = [];
    for i in num_list:
        if i % 2 == 0:
            evenX.append(str(i))
        else:
            oddX.append(str(i))
    return int(''.join(evenX)) + int(''.join(oddX))