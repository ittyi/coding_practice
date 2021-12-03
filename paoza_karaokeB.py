# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
# a_M は 曲の正しい音程
# ・誤差 5 Hz 以内なら減点しない
# ・上記に当てはまらず、誤差 10 Hz 以内なら 1 点減点
# ・上記に当てはまらず、誤差 20 Hz 以内なら 2 点減点
# ・上記に当てはまらず、誤差 30 Hz 以内なら 3 点減点
# ・上記に当てはまらない場合、5 点減点

input_line = input().split()
#print(input_line)

a_M = {}
h_M = {}
sum = {}

for i in range(int(input_line[1])):
    a_M[i] = int(input())
    #print(a_M[i])
    #print(type(a_M[i]))
    
    
for i in range(int(input_line[0])):
    record = 100
    for j in range(int(input_line[1])):
        #print(j,  "----")
        h_M[j] = int(input())
        #print(a_M[j])
        if a_M[j] - 5 <= h_M[j] <= a_M[j] + 5:
            #print("ok")
            continue
        elif a_M[j]-10 <= h_M[j] <= a_M[j]+10:
            #print("ok2")
            record -= 1
        elif a_M[j]-20 <= h_M[j] <= a_M[j]+20:
            #print("ok3")
            record -= 2
        elif a_M[j]-30 <= h_M[j] <= a_M[j]+30:
            #print("ok4")
            record -= 3
        else :
            #print("ok5")
            record -= 5
        #print(record)
        #print("----")
    
    sum[i] = record
    #print(sum)


max_v = max(sum.values())
if max_v < 0:
    print(0)
else :
    print(max_v)






