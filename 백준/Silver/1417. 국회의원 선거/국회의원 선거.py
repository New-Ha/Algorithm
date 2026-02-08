n = int(input())
dasom = int(input())
others = sorted((int(input()) for _ in range(n - 1)), reverse=True)

cnt = 0
while len(others) > 0 and others[0] >= dasom:
    others[0] -= 1
    dasom += 1
    cnt += 1
    others.sort(reverse=True)

print(cnt)