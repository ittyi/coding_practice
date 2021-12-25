s = input().split(" ")
N = int(s[0])
L = int(s[1])
print(N, L)

a = []
for i in range(N):
  s = input()
  # print(s, type(s))
  l = [int(x.strip()) for x in s.split(' ')]
  a.append(l)
  
print(a, type(a))
count = 0
keep = []

print("---")
index = a[0][0]
for i in range(N-1):
	index *= a[i+1][0]

for i in range(N):
	keep.append(a[i][0])


# 全部掛けたら全探索の回数わかる！！！！！！
# ぐあああああ
sum = 0








