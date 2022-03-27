# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
N = input()
input_line = input().split(" ")
# print(input_line)

for i in range(len(input_line)):
    if input_line[i] == '1': print(i+1)