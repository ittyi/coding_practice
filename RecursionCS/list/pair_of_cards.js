function winnerPairOfCards(player1,player2){
    // hashmapの作成 ※この時、マークは関係ないので除外
    let hashMapNum1 = {};
    for (i in player1){
        if (hashMapNum1[player1[i].slice(1)] >= 1) hashMapNum1[player1[i].slice(1)] += 1;
        else hashMapNum1[player1[i].slice(1)] = 1;
    }

    let hashMapNum2 = {};
    for (i in player2){
        if (hashMapNum2[player2[i].slice(1)] >= 1) hashMapNum2[player2[i].slice(1)] += 1;
        else hashMapNum2[player2[i].slice(1)] = 1;
    }

    const value1 = Object.values(hashMapNum1);
    const value2 = Object.values(hashMapNum2);

    // 一番最初の勝敗判定：最大数の多さ 
    // テスト例：["\u26634","\u26657","\u26657","\u26657","\u2663J"],["\u26657","\u26657","\u2663K","\u2660Q","\u2660Q"]
    if (Math.max(...value1) > Math.max(...value2)) return "player1";
    else if (Math.max(...value1) < Math.max(...value2)) return "player2";
    
    // 2 < 3 < 4 < 5 < 6 … J < Q < K < A 
    // あと比較したいのは、ランクの強さを、『枚数が多いものから。』
    // 一旦、後に使うためのデータ加工をする。 それぞれ手札の[ランク（文字), 実質強さ(indexで表現), 持ってる枚数]
    let rankAscending = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let byRank1 = [];
    for (i in rankAscending){
        if (hashMapNum1[rankAscending[i]] != undefined){
            byRank1.push([rankAscending[i], i , hashMapNum1[rankAscending[i]]]);
        }
    }

    let byRank2 = [];
    for (i in rankAscending){
        if (hashMapNum2[rankAscending[i]] != undefined){
            byRank2.push([rankAscending[i], i , hashMapNum2[rankAscending[i]]]);
        }
    }

    // 次の勝敗判定：カードの強さ
    // 4枚の時...3枚の時...と比較
    for (let i = 4; i > 0; i--){ //持ってる枚数(hashMapNum[rankAscending[i]])が多いものから比較
        let compMaxRank1 = 0;
        for (let j = 0; j < byRank1.length; j++){
            if (i == byRank1[j][2]) compMaxRank1 = Number(byRank1[j][1]);
        }

        let compMaxRank2 = 0;
        for (let j = 0; j < byRank2.length; j++){
            if (i == byRank2[j][2]) compMaxRank2 = Number(byRank2[j][1]);
        }
        if (compMaxRank1 > compMaxRank2) return "player1";
        else if (compMaxRank1 < compMaxRank2) return "player2";
    }
    
    // 枚数ごとの強さ比較後、枚数は同じ場合の強さで最後の勝敗判定
    let sum1 = 0;
    for (let i = 0; i < byRank1.length; i++){
        if (byRank1[i][0] == "A") sum1 += 14;
        else if (byRank1[i][0] == "K") sum1 += 13;
        else if (byRank1[i][0] == "Q") sum1 += 12;
        else if (byRank1[i][0] == "J") sum1 += 11;
        else sum1 += Number(byRank1[i][0]);
    }
    let sum2 = 0;
    for (let i = 0; i < byRank2.length; i++){
        if (byRank2[i][0] == "A") sum2 += 14;
        else if (byRank2[i][0] == "K") sum2 += 13;
        else if (byRank2[i][0] == "Q") sum2 += 12;
        else if (byRank2[i][0] == "J") sum2 += 11;
        else sum2 += Number(byRank2[i][0]);
    }
    if (sum1 > sum2) return "player1";
    else if (sum1 < sum2) return "player2";
    else return "draw";
}
