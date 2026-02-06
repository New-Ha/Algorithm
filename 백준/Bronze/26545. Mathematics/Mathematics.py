t = int(input())
nums = [int(input()) for _ in range(t)]

sum = 0
for n in nums:
    sum += n
print(sum)