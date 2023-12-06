def solution(a, b):
    month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    
    daytime = b - 1;
    for i in range(a - 1):
        daytime += month[i]

    return day[daytime % 7]