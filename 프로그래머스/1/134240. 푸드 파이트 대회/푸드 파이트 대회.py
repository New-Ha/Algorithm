def solution(food):
    result = '';
    foods = list(map(lambda el: (el - 1) // 2 if el % 2 == 1 else el // 2, food));
    for i in range(len(foods)):
        if foods[i] != 0:
            result += str(i) * foods[i];

    return result + '0' + result[::-1]