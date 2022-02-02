input_line = input().split()
A = int(input_line[0])
B = int(input_line[1])
C = int(input_line[2])
D = int(input_line[3])

# 　を計算した結果を出力してください。ここで、X mod Dとは X を D で割った余
print((((A+B) *C)*((A+B) *C)) % D)

# 模範
# a, b, c, d = map(int, input().split())

# print(((a + b) * c) ** 2 % d)