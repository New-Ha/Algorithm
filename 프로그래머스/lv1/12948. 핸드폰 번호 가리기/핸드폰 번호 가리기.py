# import numpy as np

def solution(phone_number):
    # return ''.join(np.repeat('*', len(phone_number) - 4)) + phone_number[-4:]   
    
    return '*' * (len(phone_number) - 4) + phone_number[-4:]   