# 物件情報に加えてどのテナントがどの階に入っているかの情報を保持しています。
# テナントは複数の階に入りうるのですが、入居階数を出すときにすべての階を列挙するとユーザは非常に見にくいです。
# これをユーザが見やすい形にまとめて表示するプログラムを作成してください。例えば、 2F,3F,4Fの場合は “2F-4F" と表示してください。

# 2, 4Fみたいなパターンは、ハイフンではなく 2F,4F

# 例:

# def readable_floors(floors):
  # implement

# ----------



# 実装
floors = [2, 3, 4]

def readable_floors(floors):
	result = “”

	tmp = 0
 	length = len(floors)
	flag = false
	for i in range(length):
		if tmp == 0:
			result = result + str(floors[i]( + “F”
			tmp = floors[i]
			continue

		if ( I + 1 )  == length:
			result = result + str(floors[i]) + ”F“
			break

		isIncrement = floor == (tmp + 1)
		if isIncrement and flag == false:
			result = result + “~”
			tmp = floors[i]
			flag = true
			continue
		elif isIncrement and flag == true:
			tmp = floors[i]
			continue
			
		result = result  + floors[i] + “F,”
		tmp = floors[i]
		flag = false
		

# test
# 空の配列は考慮なしでOK
print(readable_floors([2, 3, 4])) #  “2F-4F"

print(readable_floors([2, 4])) #  “2F,4F"

print(readable_floors([2, 5])) #  “2F,5F"

print(readable_floors([2, 4, 5, 6])) #  “2F,4F~6F”

print(readable_floors([2, 3, 4, 7])) #  “2F~4F,7F”

print(readable_floors([2, 3, 4, 7, 9])) #  “2F~4F,7F,9F”

print(readable_floors([2, 4, 5, 6, 7])) #  “2F,4F~7F” -> “2F,4F~~7F”

print(readable_floors([2])) #  “2F"




