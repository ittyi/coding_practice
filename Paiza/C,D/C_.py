# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = input().split(" ")
for i in range(int(input_line[0])):
    if i == 0: 
        print("(" + input_line[1] + ", " + input_line[2] + ")", end="")
        continue
    print(", (" + input_line[1] + ", " + input_line[2] + ")", end="")


# 模範
# values = input().split()
# N = int(values[0])
# A = int(values[1])
# B = int(values[2])

# for i in range(N):
#     if i < N - 1:
#         print("({}, {})".format(A, B), end=", ")
#     else:
#         print("({}, {})".format(A, B))