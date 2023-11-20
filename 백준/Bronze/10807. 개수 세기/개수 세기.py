n = int(input());
arr = input().split(' ');
target = int(input());
count = 0;
for i in range(n):
    if int(arr[i]) == target:
        count += 1
print(count)
    