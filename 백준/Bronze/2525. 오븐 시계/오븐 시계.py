h, m = list(map(int ,input().split()));
start = h * 60 + m;
time = int(input());
endH = ((start + time) // 60) % 24
endM = ((start + time) % 60) % 60
print(endH, endM)