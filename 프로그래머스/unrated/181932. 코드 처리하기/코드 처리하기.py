def solution(code):
    ret = ''
    mode = False
    
    for i in range(len(code)):
        if code[i] == '1':
            mode = not mode
        elif i % 2 == int(mode):
            ret += code[i]
    return "EMPTY" if len(ret) == 0 else ret

    #ref
    
    # return "".join(code.split("1"))[::2] or "EMPTY"