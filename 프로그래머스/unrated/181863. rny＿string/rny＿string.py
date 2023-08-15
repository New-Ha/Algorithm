def solution(rny_string):
    return ''.join(map(lambda el: 'rn' if el == 'm' else el, list(rny_string)))