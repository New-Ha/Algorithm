N = int(input())
count = N

for _ in range(N):
    word = input()
    seen = set()
    prev = ''
    
    for c in word:
        if c != prev:
            if c in seen:
                count -= 1
                break
            seen.add(c)
            prev = c

print(count)