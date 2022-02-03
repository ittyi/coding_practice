# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
N, A, B = map(int, input().split())
# print(N, A, B)

# 1. NにAを足す、またはNからAを引く
# 2. NにBを足す、またはNからBを引く

if (N+A)+B == 0: print("YES")
elif (N+A)-B == 0: print("YES")
elif (N-A)+B == 0: print("YES")
elif (N-A)-B == 0: print("YES")
else: print("NO")

# 模範
# n, a, b = [int(x) for x in input().split()]

# if n + a + b == 0:
#     print("YES")
# elif n + a - b == 0:
#     print("YES")
# elif n - a + b == 0:
#     print("YES")
# elif n - a - b == 0:
#     print("YES")
# else:
#     print("NO")