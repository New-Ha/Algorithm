def solution(my_string):
    # return ''.join(list(map(lambda el : el.lower() if el.isupper() else el.upper(), my_string)))
    return ''.join([x.lower() if x.isupper() else x.upper() for x in my_string])
    