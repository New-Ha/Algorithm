n = input()
result = 0

if '7' in n:
    result = 3 if int(n) % 7 == 0 else 2
else:
    result = 1 if int(n) % 7 == 0 else 0

print(result)