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
