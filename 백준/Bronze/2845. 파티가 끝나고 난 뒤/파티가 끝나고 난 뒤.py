l, p = map(int, input().split())
papers = list(map(int, input().split()))

participant = l * p

result = []
for paper in papers:
    result.append(paper - participant)

print(' '.join(map(str, result)))