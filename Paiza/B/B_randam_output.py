# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
nm = input().split(" ")
# print(nm)

A = input().split(" ")
# print(A)

B = input().split(" ")
# print(B)

index = 0
for i in range(len(B)):
    # print(i)
    for j in range(int(B[i])):
        # print(j, end="")
        if j+1 == int(B[i]): 
            print(int(A[index]), end="")
            index += 1
            break
        else: 
            print(int(A[index]), end=" ")
            index += 1
    print()