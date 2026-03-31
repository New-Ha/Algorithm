import sys

input = sys.stdin.read().split()
a, b, c, d, e, f = map(int, input)

top_a = sorted([a, b, c, d], reverse=True)[:3]
top_b = max(e, f)

print(sum(top_a) + top_b)