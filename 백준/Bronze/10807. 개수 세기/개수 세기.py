n = int(input());
arr = list(map(int, input().split(' ')));
target = int(input());
count = 0;
for i in range(n):
    if arr[i] == target:
        count += 1
print(count)
    