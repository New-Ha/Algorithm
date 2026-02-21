import sys

n, c, p = list(map(int, sys.stdin.read().split()))
print('yes' if c * p >= n else 'no')