# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = int(input())
# print(input_line)

sum = 1
for i in range(input_line-1):
    # print(input_line, (input_line-1))
    sum *= input_line
    input_line -= 1
print(sum)