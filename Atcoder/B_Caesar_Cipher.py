import sys

id_alpha = [
  "a","b","c","d","e","f","g","h","i","j","k",
  "l","m","n","o","p","q","r","s","t","u","v",
  "w","x","y","z"
]

s = input()
t = input()

tmp = 0
tmp2 = 0
tmp3 = 0
length = len(s)
alpha_len = len(id_alpha)

if length == 1:
  sys.exit()

for i in range(length):
  for j in range(alpha_len):
    if s[i] == id_alpha[j]:
      tmp = j
      break

  for k in range(alpha_len):
    if t[i] == id_alpha[k]:
      tmp2 = k
      break
  
  if i == 0:
    tmp3 = tmp2 - tmp
    if tmp3 < 0:
      tmp3 = (tmp2 + tmp) - (tmp - (26-tmp))
    continue
  tmp4 = tmp3
  tmp3 = tmp2 - tmp
  if tmp3 < 0:
    tmp3 = (tmp2 + tmp) - (tmp - (26-tmp))

  if tmp3 != tmp4:
    print("No")
    sys.exit()

print("Yes")

# import sys
 
# id_alpha = [
#   "a","b","c","d","e","f","g","h","i","j","k",
#   "l","m","n","o","p","q","r","s","t","u","v",
#   "w","x","y","z"
# ]

# s = input()
# t = input()
 
# tmp = 0
# tmp2 = 0
# tmp3 = 0
# length = len(s)
# alpha_len = len(id_alpha)
 
# if length == 1:
#   print("Yes")
#   sys.exit()
   
# for i in range(length):
#   print("i:", i)
#   for j in range(alpha_len):
#     print("check j:", j)
#     if s[i] == id_alpha[j]:
#       print(i, j)
#       tmp = j
#       print(tmp)
#       break
   
#   for k in range(alpha_len):
#     print("check k:", k)
#     if t[i] == id_alpha[k]:
#       tmp2 = k
#       print(tmp2)
#       break
  
#   if i == 0:
#     tmp3 = tmp2 - tmp
#     print("tmp3:", tmp3)
#     if tmp3 < 0:
#       print("check")
#       tmp3 = (tmp2 + tmp) - (tmp - (26-tmp))
#       print("tmp3:", tmp3)
#     continue
#   print(i, j, tmp, tmp2, tmp3)
#   tmp4 = tmp3
#   tmp3 = tmp2 - tmp
#   print(tmp4, tmp3)
#   if tmp3 < 0:
#     tmp3 = (tmp2 + tmp) - (tmp - (26-tmp))
  
#   if tmp3 != tmp4:
#     print("No")
#     sys.exit()
  
  
# print("Yes")

# import sys

# k = 26
# s = input()
# t = input()

# if len(s) == 1 or s == t:
# 	print("Yes")
# 	sys.exit()

# convert_str = ""

# for i in range(k):
# 	for j in s:
# 		# print(ord(j), type(ord(j)))
# 		ord_s = ord(j) + i
# 		# print(ord_s)
# 		if ord_s >= 122:
# 			ord_s -= 25
# 		convert_str += chr(ord_s)
# 	# print(convert_str)

# 	if t == convert_str:
# 		print("Yes")
# 		break

# 	convert_str = ""

# if convert_str == "":
# 	print("No")
