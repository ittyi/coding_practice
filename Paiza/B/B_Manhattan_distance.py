#  input part
input_line = input().split(' ')
tmp = []
for i in range(int(input_line[0])):
    tmp2 = input().split(' ')
    tmp.append(tmp2)


# とりあえず入力はOK
# やりたいことリスト。
# 座標の二次元配列を作る
# boolで予約済みが否かを表す
# 一番良い席p, qから、奇数個横、偶数個横、奇数個の順で座標を走査できるようなロジックを考える　最重要！
# 走査しながら、マンハッタン距離？が一番小さいかつfaleの席を見つけた瞬間、それらをリストに格納
# 出力！
# こんな感じかな。


# では早速。
# 座標の二次元配列を作る
coordinate = [[[0] for j in range(int(input_line[2]))] for i in range(int(input_line[1]))]


# boolで予約済みが否かを表す boolが良かったけど、パッとわからないから一旦1, 0で表現。
# print(tmp)
for i in tmp:
    coordinate[int(i[0])][int(i[1])][0] = 1

# 一番良い席p, qから、奇数個横、偶数個横、奇数個の順で座標を走査できるようなロジックを考える　最重要！
# まずは、座標の特徴を考える。
# 仮に0,0が一番いい席だとしたら、一ついどうしたら1,0か0,1。2つ移動したら。0,2か1，1か2，0、3つなら,,,
# どうやら、座標番号を足した数は関係ありそうね。
# 仮に例題１なら、2+3で5。一つ移動したます4つは4か6。
# 一旦泥臭く、全部の座標の座標番号を足してしまえばいいのでは？それをappendして、インデックス2番目は座標を足した数にする。
indexH = 0
indexW = 0
for H in coordinate:
    for W in H:
        coordinate[indexH][indexW].append(int(indexH) + int(indexW))
        coordinate[indexH][indexW].append(int(indexH))
        coordinate[indexH][indexW].append(int(indexW))
        indexW += 1
    
    indexW = 0
    indexH += 1

# できた！あとは一番良い席の座標合計番号を取得して、
# そこから番号をインクリメントしていき、
# インクリメントした座標合計番号の中に0（fakse）がいたらその座標合計番号のリストを全部他のリストにぶち込む
# その中で、リスト[0]が0のものを全て出力！これでいけるはず。。

# できた！あとは一番良い席の座標合計番号を取得
best_seats = coordinate[int(input_line[3])][int(input_line[4])]


# 全てのマンハッタン距離を求めてしまう。
def checkEqualValue(W, best_seats):
    diffP = abs(W[2] - best_seats[2]) 
    diffQ = abs(W[3] - best_seats[3])
    
    return diffP + diffQ
    

def allManhattanDistances(best_seats):
    indexH = 0
    indexW = 0
    for H in coordinate:
        for W in H:
            coordinate[indexH][indexW].append(checkEqualValue(W, best_seats))
            indexW = indexW + 1
    
        indexW = 0
        indexH += 1
    

allManhattanDistances(best_seats)


# できたぁあああああ
# あとは、0, 1, 2、、と見ていって、最初のインデックスがゼロのものを算出する
checkList = []

def getManhattanList(i):
    retList = []
    indexH = 0
    indexW = 0
    for H in coordinate:
        for W in H:
            if (W[4] == i):
                retList.append(W)
            indexW = indexW + 1
    
        indexW = 0
        indexH += 1
            
    return retList
    

# 予約者が存在しないマンハッタン距離のリストを取得
ansList = []
for i in range(5):
    checkReservation = getManhattanList(i)
    flgReservation = False
    for s in checkReservation:
        if(s[0] == 0):
            flgReservation = True
            ansList = checkReservation
            break

    if (flgReservation == True):
        break

# output part
for ans in ansList:
    if(ans[0] == 0):
        print(ans[2], ans[3])

