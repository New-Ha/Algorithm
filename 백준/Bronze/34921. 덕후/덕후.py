a, t = map(lambda x: int(x) * 2, input().split())
p = 60 - a + t
print(0 if p <= 0 else p)