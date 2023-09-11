def solution(numbers):
    sortStr = sorted(list(map(lambda el: str(el) * 3, numbers)), reverse=True);
    result = ''.join(list(map(lambda el: el[0: len(el) // 3], sortStr)));
    return "0" if int(result) == 0 else result