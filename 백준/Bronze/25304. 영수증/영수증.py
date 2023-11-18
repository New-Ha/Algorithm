total = int(input())
n = int(input())
sum = 0;
for i in range(n):
    a, b = input().split()
    sum += int(a) * int(b)
if total == sum: print('Yes')
else: print('No')