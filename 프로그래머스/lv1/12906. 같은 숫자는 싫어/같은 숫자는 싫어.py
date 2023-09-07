def solution(arr):
    stack = [];
    while len(arr):
        if len(stack) == 0:
            stack.append(arr.pop());
        else:
            if stack[-1] != arr[-1]:
                stack.append(arr.pop())
            else: stack.pop()
    return list(reversed(stack))
