def solution(date1, date2):
    date1Sum = str(date1[0])+str(date1[1])+str(date1[2]);
    date2Sum = str(date2[0])+str(date2[1])+str(date2[2]);
    return 1 if int(date1Sum) - int(date2Sum) < 0 else 0