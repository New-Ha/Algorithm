import sys
input = sys.stdin.readline

for _ in range(int(input())):
    s = input().strip()
    result = s[0]
    
    for ch in s[1:]:
        if ch != result[-1]:
            result += ch
    
    print(result)