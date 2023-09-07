def solution(arr):
    # stack = [];
    # while len(arr):
    #     if len(stack) == 0:
    #         stack.append(arr.pop());
    #     else:
    #         if stack[-1] != arr[-1]:
    #             stack.append(arr.pop())
    #         else: stack.pop()
    # return list(reversed(stack))

    result = []
    for el in arr:
        if len(result) == 0 or result[-1] != el:
            result.append(el)

    return result
