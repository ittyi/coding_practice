# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = input().split()
# print(input_line)

N = int(input_line[0])
M = int(input_line[1])
K = int(input_line[2])

# print(N,M,K)

count = 0
while (N <= K):
    N += M
    count += 1


print(count)