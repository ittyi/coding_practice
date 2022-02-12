# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = int(input())
input_line2 = input().split(" ")
# print(len(input_line2))
# print(input_line2)

# input_line2 = ["1005111"]
# input_line2 = ["100", "51", "11"]


count = 0
for i in range(len(input_line2)):
    # print(input_line2[i])
    # for j in range(len(input_line2[i])):
    #     # print(input_line2[i][j])
    #     if input_line2[i][j] == "1": count += 1
    if input_line2[i] == '1': count += 1
    
    
print(count)