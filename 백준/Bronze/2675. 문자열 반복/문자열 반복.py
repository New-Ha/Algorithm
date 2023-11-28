n = int(input());

for _ in range(n):
    k, s = input().split();
    for j in s:
        print(j * int(k) , end='')
    print()