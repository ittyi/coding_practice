# coding: utf-8
# 自分の得意な言語で
# Let's チャレンジ！！
input_line = input().split(" ")
# print(input_line)

for i in range(int(input_line[0])):
    a = input()
    print(a.rjust(int(input_line[1]), ' '))


# 	values = input().split()
# N = int(values[0])
# M = int(values[1])

# for _ in range(N):
#     a = int(input())

#     print("{: >{}}".format(a, M))

# まず、標準入力をスペース区切りで処理して、それぞれ変数 N と M に格納します。
# format メソッドは文字列中の {} に {} の中の書式に基づいて、引数の前から順に置換を行います。たとえば、"{}-{}".format(1, 2) は 1-2 という文字列を生成して返します。
# 書式の定義については、「数値を M けた半角スペース埋めで出力」と変わりません。