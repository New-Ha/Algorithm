n = int(input())

for o in range(n // 5, -1, -1):
    if (n - o * 5) % 2 == 0:
        print(o + (n - o * 5) // 2)
        break
else:
    print(-1)