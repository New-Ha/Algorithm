def solution(num_list):
    count = 0;
    for el in num_list:
        while el > 1:
            if el % 2 == 0: el /= 2;
            else: el = (el - 1) / 2;
            count += 1;
    return count