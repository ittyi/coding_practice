// テストケースは全部通った。2ｈ
function winnerPairOfCards(player1,player2){
    // 関数を完成させてください
    let hashMapNum1 = {};
    for (i in player1){
        // console.log(i, player1[i], player1[i][0], ": ", player1[i][1])
        if (hashMapNum1[player1[i].slice(1)] >= 1) hashMapNum1[player1[i].slice(1)] += 1;
        else hashMapNum1[player1[i].slice(1)] = 1;
    }
    console.log(hashMapNum1)

    let hashMapNum2 = {};
    for (i in player2){
        //console.log(i, player2[i], player2[i][0], ": ", player2[i][1])
        if (hashMapNum2[player2[i].slice(1)] >= 1) hashMapNum2[player2[i].slice(1)] += 1;
        else hashMapNum2[player2[i].slice(1)] = 1;
    }
    console.log(hashMapNum2)


    console.log("---")
    console.log(Object.keys(hashMapNum1).length)
    const key1 = Object.keys(hashMapNum1);
    const key2 = Object.keys(hashMapNum2);
    const value1 = Object.values(hashMapNum1);
    const value2 = Object.values(hashMapNum2);

    // 一番最初の勝敗判定：最大数の多さ ["\u26634","\u26657","\u26657","\u26657","\u2663J"],["\u26657","\u26657","\u2663K","\u2660Q","\u2660Q"]
    if (Math.max(...value1) > Math.max(...value2)) return "player1";
    else if (Math.max(...value1) < Math.max(...value2)) return "player2";
    console.log("value1: ", value1)
    console.log("value2: ", value2)
    console.log("hashMapNum1: ", hashMapNum1)
    console.log("hashMapNum2: ", hashMapNum2)
    

    console.log("--以下ランク別勝敗----------")
    // 2 < 3 < 4 < 5 < 6 … J < Q < K < A 
    // ここまでの時点で、枚数は確定で同じ。
    // あと比較したいのは、ランクの強さを、『枚数が多いものから。』
    //console.log(value1)
    let rankAscending = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let rankDescending = ['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
    let byRank1 = [];
    for (i in rankAscending){
        //console.log(i, rankAscending[i], "hashMapNum1: ", hashMapNum1[rankAscending[i]])
        if (hashMapNum1[rankAscending[i]] != undefined){
            byRank1.push([rankAscending[i], i , hashMapNum1[rankAscending[i]]]);
        }
    }
    console.log(byRank1)

    let byRank2 = [];
    for (i in rankAscending){
        //console.log(i, rankAscending[i], "hashMapNum1: ", hashMapNum2[rankAscending[i]])
        if (hashMapNum2[rankAscending[i]] != undefined){
            byRank2.push([rankAscending[i], i , hashMapNum2[rankAscending[i]]]);
        }
    }
    console.log(byRank2)

    console.log("----↑data加工↑----")

    // 次の勝敗判定：カードの強さ
    // .sort((a, b) => b-a)

    for (let i = 4; i > 0; i--){
        console.log(i)
        let compMaxRank1 = 0;
        for (let j = 0; j < byRank1.length; j++){
            if (i == byRank1[j][2]) compMaxRank1 = Number(byRank1[j][1]);
        }
        console.log("compMaxRank1: ", compMaxRank1)

        let compMaxRank2 = 0;
        for (let j = 0; j < byRank2.length; j++){
            if (i == byRank2[j][2]) compMaxRank2 = Number(byRank2[j][1]);
        }
        console.log("compMaxRank2: ", compMaxRank2)
        if (compMaxRank1 > compMaxRank2) return "player1";
        else if (compMaxRank1 < compMaxRank2) return "player2";
    }
    
    let sum1 = 0;
    for (let i = 0; i < byRank1.length; i++){
        sum1 += Number(byRank1[i][0]);
    }
    let sum2 = 0;
    for (let i = 0; i < byRank2.length; i++){
        sum2 += Number(byRank2[i][0]);
    }
    if (sum1 > sum2) return "player1";
    else if (sum1 < sum2) return "player2";
    else return "draw";

    // let result = null;
    // for (let i = 0; i < key1.length; i++) {
    // if (hashMapNum1[key1[i]] === Math.max(...value1)) {
    //     result = key1[i];
    // }
    // }
    // console.log(result); //key1の一番大きいやつ

    console.log("----")
    console.log(player2)
    return player1;
}
