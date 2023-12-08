import math

def solution(progresses, speeds):
    diploy = [math.ceil((100 - progresses[i]) / speeds[i]) for i in range(len(progresses))]
    
    result = [];
    count = 0;
    temp = diploy[0];
    for i in range(len(diploy)):
        if(temp < diploy[i]):
            result.append(count);
            temp = diploy[i];
            count = 1;
        else: count += 1
    if count > 0: result.append(count)
    return result