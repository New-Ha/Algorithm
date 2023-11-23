
n = input()
for i in range(int(n)):
    a, b = list(map(int, input().split()))
    print("Case #{}: {} + {} = {}".format(i + 1, a, b, a + b))