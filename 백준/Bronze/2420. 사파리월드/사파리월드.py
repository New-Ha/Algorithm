# 데이터가 많지 않다면 input()으로 가져온다.
data = list(map(int, input().split()))
data.sort()
print(data[1]-data[0])