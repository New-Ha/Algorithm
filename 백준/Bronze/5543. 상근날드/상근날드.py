import sys

s, j, h, coke, soda = map(int, sys.stdin.read().split())
minSet = min(s, j, h) + min(coke, soda) - 50
print(minSet)