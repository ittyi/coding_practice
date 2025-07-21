# https://app.codility.com/demo/results/trainingHUWUWJ-GVY/

# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

# Note that the example tests are not part of your score. On submission at least 8 test cases not shown here will assess your solution.

def solution(N):
    return calc_binary_gap(convert_n_to_binary(N))

# TODO: 二進数を受け取り、10進数を算出する(10進数の英語忘れた。。)
def calc(binary):
    base = 1
    result = 0
    for i in range(len(binary)):
        if binary[i] == 1:
            result += base
        
        base = base * 2

    return result

# test convert_n_to_binary
# print("test calc()")
# print("calc([1]) == 1)):", calc([1]) == 1)
# print("calc([1, 1]) == 3]):", calc([1, 1]) == 3)
# print("calc([1, 1, 1]) == 7):", calc([1, 1, 1]) == 7)
# print("calc([1,0,0,1]) == 9):", calc([1,0,0,1]) == 9)
# print("calc([1,1,1,1]) == 15):", calc([1,1,1,1]) == 15)
# print("calc([0,0,0,0,1]) == 16):", calc([0,0,0,0,1]) == 16)
# print("calc([0,0,1,0,1]) == 20):", calc([0,0,1,0,1]) == 20)
# print("calc([0,0,0,0,0,1]) == 32):", calc([0,0,0,0,0,1]) == 32)
# print("calc([1,0,0,0,0,1]) == 33):", calc([1,0,0,0,0,1]) == 33)
# print("calc([1,0,0,0,1,0,0,0,0,1]) == 529):", calc([1,0,0,0,1,0,0,0,0,1]) == 529)
# print("binary = [1,0,0,0,1,0,0,0,0,1]:", calc([1,0,0,0,1,0,0,0,0,1]) == 1041)

# まずは N を二進数に直す必要がある
def convert_n_to_binary(n): 
    # ぐぐりたいっぴ。。
    # 二進数に変換するにあたって必要なこと整理。
    # 1桁目、2桁目と上がるにつれて2, 4, 8 と倍々になる
    # まずは 32 に一番近い数字、つまり2, 4, 8, 16, 32までの桁数を算出する -> 00000 
    # 一番大きい数字を1にして、その時の10進数の値を求める -> 10000 -> 32
    # この10進数の値が、nと全く同じならその時のバイナリを返す、もし超えてしまっていたらその桁は0のまま次の桁に移動する

    # TODO: 最大桁数を求める input 32, output 000000
    max_range = 0
    base = 2
    binary = []
    while True:
        base = base * 2
        max_range += 1
        binary.append(0)

        if base > n:
            max_range += 1
            binary.append(0)
            break
    
    # print("base max_range: ", max_range)
    # print("binary: ", binary)

    # TODO: 一番大きい桁数を1にしてみて、その時の10進数の値を求める input 00000, output 10000
    for i in range(max_range):
        # print("i: ", i)
        binary[max_range-1-i] = 1
        # print("convert [i] to 1: ", binary)
        c = calc(binary)
        # print("calc: ", c)

        if c == n:
            return binary
        
        if c > n:
            binary[max_range-1-i] = 0

    print("must errer handling")
    return []

# test convert_n_to_binary
# print("test convert_n_to_binary()")
# print("n = 32:", convert_n_to_binary(32) == [0,0,0,0,0,1])
# print("n = 33:", convert_n_to_binary(33) == [1,0,0,0,0,1])
# print("n = 35:", convert_n_to_binary(35) == [1,1,0,0,0,1])
# print("n = 1041:", convert_n_to_binary(1041) == [1,0,0,0,1,0,0,0,0,0,1])


# 二進数のバイナリギャップがいくつかを計算する
def calc_binary_gap(binary):
    count = 0
    count_ary = []

    gap_start = False
    for i in range(len(binary)):
        if gap_start == True and binary[i] == 1:
            # print("test i:", i)
            # print("test count:", count)
            count_ary.append(count)
            gap_start = False
            count = 0

        if gap_start == False and binary[i] == 1:
            gap_start = True

        if gap_start == True and binary[i] == 0:
            count += 1

    # print("count_ary:", count_ary)
    # print("max(count_ary):", max(count_ary))
    if len(count_ary) == 0: return 0
    return max(count_ary)

# print("test calc_binary_gap()")
# print("calc_binary_gap([1,1,1]) == 0):", calc_binary_gap([1,1,1]) == 0)
# print("calc_binary_gap([0,0,1]) == 0):", calc_binary_gap([0,0,1]) == 0)
# print("calc_binary_gap([0,0,0,0,0,1]) == 0):", calc_binary_gap([0,0,0,0,0,1]) == 0)
# print("calc_binary_gap([1,0,0,0,0,1]) == 4):", calc_binary_gap([1,0,0,0,0,1]) == 4)
# print("calc_binary_gap([1,0,0,0,1,0,0,0,0,1]) == 4):", calc_binary_gap([1,0,0,0,1,0,0,0,0,1]) == 4)
# print("calc_binary_gap([1,0,0,0,1,0,0,0,0,0,1]) == 5):", calc_binary_gap([1,0,0,0,1,0,0,0,0,0,1]) == 5)

# green testまで完了。
# gapの求め方を理解する。
# 最長のバイナリ ギャップを返せばいい。
# 1だけ、もしくは10000などは バイナリ ギャップ = 0
