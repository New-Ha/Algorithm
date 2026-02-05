t = int(input())
nums = [int(input()) for _ in range(t)]

fibo = []
fibo.append([1, 0])
fibo.append([0, 1])
for i in range(2, max(nums) + 1):
    z = fibo[i - 1][0] + fibo[i - 2][0]
    o = fibo[i - 1][1] + fibo[i - 2][1]
    fibo.append([z, o])

for n in nums:
    print(*fibo[n])