# 問題文
# この問題は 1 つの入力ファイルに複数のテストケースが含まれる問題です。

# はじめに整数 *T* が与えられます。*T* 個のテストケースについて次の問題を解いてください。

# - *N* 個の正整数 𝐴1,𝐴2,...,𝐴𝑁 があります。このうち奇数は何個ありますか？

# 入力値
# 4
# 3
# 1 2 3
# 2
# 20 23
# 10
# 6 10 4 1 5 9 8 6 5 1
# 1
# 1000000000

# 出力値
# 2
# 1
# 5
# 0

def main():
    std_input = get_input_numlist()
    result_ary = get_count_odd_list(std_input)
    print_ary(result_ary)

def get_input_numlist() -> list:
    N = int(input())
    res_list = []
    for i in range(N):
        tmp = input()
        ary = list(map(int, input().split()))
        res_list.append(ary)
    
    return res_list
    
def get_count_odd_list(numlist: list) -> list:
    res = []
    for numbers in numlist:
        count = 0
        for num in numbers:
            if num % 2 != 0: count = count + 1
        
        res.append(count)
    
    return res

def print_ary(numlist: list) -> None:
    for v in numlist:
        print(v)

if __name__ == "__main__":
    main()
