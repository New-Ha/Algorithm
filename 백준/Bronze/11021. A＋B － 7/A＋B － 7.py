n = input()
for i in range(int(n)):
    a, b = list(map(int, input().split()));
    print('Case #{0}: {1}'.format(i + 1, a + b))