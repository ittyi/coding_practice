N = int(input())
A_int = input().split(" ")
B_int = input().split(" ")

A = [int(val) for val in A_int]
B = [int(val) for val in B_int]

count = 0
for i in range(N):
    if (A[i] == B[i]): count += 1
print(count)

# 模範
# n = int(input())
# a = [int(x) for x in input().split()]
# b = [int(x) for x in input().split()]

# ans = 0
# for i in range(n):
#     if a[i] == b[i]:
#         ans += 1

# print(ans)