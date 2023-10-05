def solution(s):
    if s[0] == ')' or s[len(s) - 1] == '(': return False;

    stack = [];
    for i in s:
        if i == '(': stack.append(i);
        elif len(stack) != 0 and i == ')': stack.pop();
        elif len(stack) == 0 and i == ')': return False;
    return len(stack) == 0