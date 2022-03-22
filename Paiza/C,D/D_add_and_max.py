# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
N = input()
# print(N)

input_line = input().split(" ")
# print(input_line)

box_num = []
count = 1
for i in input_line:
    # print(i)
    box_num.append(int(i)+count)
    count += 1

print(max(box_num))
    