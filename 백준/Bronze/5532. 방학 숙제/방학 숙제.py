import sys
l, a, b, c, d = map(int, sys.stdin.read().split())
print(l - max((a + c - 1)//c, (b + d - 1)//d))