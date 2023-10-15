def solution(s):
    return ''.join(sorted(filter(lambda el: len(s.split(el)) == 2, list(s))))