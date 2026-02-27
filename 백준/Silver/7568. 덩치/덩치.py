N = int(input())
people = []
for _ in range(N):
    people.append(list(map(int, input().split())))

rank = [1] * N

for i in range(N):
    cw, ch = people[i]
    for j in range(N):
        if i == j:
            continue
        tw, th = people[j]
        if cw < tw and ch < th:
            rank[i] += 1

print(*rank)