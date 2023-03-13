# coding: utf-8
# Your code here!

# 例1:
# 入力: nums = [1,2,3,4,3], target = 6
# 出力: 2
# 説明: 足して6になるペアは、2+4 と 3+3 となり、2が正解
# 例2:
# 入力: nums = [1,5,3,3,3], target = 6
# 出力: 4
# 説明: 足して6になるペアは、1+5 と 3つの異なる 3+3 （3番目の要素と4番目の要素、3番目の要素と5番目の要素、4番目の要素と5番目の要素）となり、4が正解。

# 前提
# ・2 ≦ len(nums) ≦ 10000
# ・nums[i] と target は -inf < nums[i], target < inf を満たす任意の int である

# [テストケース]
# [1,5,3,3,3]　target 6
# [1,2,3,4,3] target 6
# [1,5,3,3,3] target 6
# [1,1,1,1,1] target 2

def solution(ints, target):
    print(ints, target)
    result = 0
    count = 0
    for i in range(len(ints)):
        # print("i:", i)
        for j in range(len(ints)):
            # print(j, end=" ")
            # print("ints[i] + ints[j]:", ints[i], ints[j])
            if count == j or j <= i:
                continue
            elif ints[i] + ints[j] == target:
                # print("check")
                result = result + 1
                
        # print()
        count = count + 1
    return result
    

print("result:", solution([1,2,3,4,3], 6))
