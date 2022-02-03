# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
Q = int(input())
for i in range(Q):
    nm = input().split()
    N = nm[0]
    M = nm[1]
    # print(N, M)
    # print(round(float(N), int(M)))
    s_1 = str(round(float(N), int(M))).split(".")
    print(s_1[0] + "." + s_1[1].ljust(int(M), '0'))
    