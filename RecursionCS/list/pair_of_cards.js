// 作り直した。テストケースまでclear
// このケースもclear["♠2","♠4","♥K","♥A","♣10"],["♣Q","♦3","♣J","♠A","♦8"]
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

    console.log("hashMapNum1", hashMapNum1)
    console.log("hashMapNum2", hashMapNum2)
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
    console.log("byRank1: ", byRank1) 
    console.log("byRank2: ", byRank2)

    // 一番最初の勝敗判定：最大数の多さ 
    // テスト例：["♣4","♥7","♥7","♥7","♣J"],["♥7","♥7","♣K","♠Q","♠Q"]
    // ["♥3","♠9","♦3","♣Q","♦A"],["♥4","♥3","♠10","♦3","♥4"]
    for (let i = 4; i > 0; i--){
        let compMaxNum1 = 0;
        let compMaxRank1 = 0;
        for (let j = 0; j < byRank1.length; j++){
            if (i == byRank1[j][2] && compMaxRank1 < Number(byRank1[j][1])){
                compMaxNum1 = byRank1[j][2];
                compMaxRank1 = Number(byRank1[j][1]);
            } else if (i == byRank1[j][2]){ // このケースに対処["♥2","♠A","♦6"],["♥2","♥2","♥3"]
                compMaxNum1 = byRank1[j][2];
                compMaxRank1 = Number(byRank1[j][1]);
            }
            console.log(i, j);
            console.log("compMaxNum1: ", compMaxNum1);
            console.log("compMaxRank1: ", compMaxRank1);
        }

        let compMaxNum2 = 0;
        let compMaxRank2 = 0;
        for (let j = 0; j < byRank2.length; j++){
            if (i == byRank2[j][2] && compMaxRank2 < Number(byRank2[j][1])){
                compMaxNum2 = byRank2[j][2];
                compMaxRank2 = Number(byRank2[j][1]);
            } else if (i == byRank2[j][2]){ // このケースに対処["♥2","♠A","♦6"],["♥2","♥2","♥3"]
                compMaxNum2 = byRank2[j][2];
                compMaxRank2 = Number(byRank2[j][1]);
            }
            console.log(i, j);
            console.log("compMaxNum2: ", compMaxNum2);
            console.log("compMaxRank2: ", compMaxRank2);
        }

        // 勝敗判定
        if (compMaxNum1 > compMaxNum2) return "player1";
        else if (compMaxNum1 < compMaxNum2) return "player2";
        else if (compMaxRank1 > compMaxRank2) return "player1";
        else if (compMaxRank1 < compMaxRank2) return "player2";
    }

    // 上記も同じ場合、次に枚数の多いカードを同様に比べ、勝敗が決まるまですべてのカードを比べる
    // ["♥9","♠8","♦7","♣6","♦5"],["♥9","♥8","♠7","♦6","♥4"]
    // ["♥3","♠4","♦5","♣6","♦7"],["♥2","♥3","♠5","♦6","♥7"]  等々
    console.log("byRank1: ", byRank1) 
    console.log("byRank2: ", byRank2)
    let compRank1 = [];
    for (let i = 0; i < byRank1.length; i++){
        compRank1.push(Number(byRank1[i][1]));
        // console.log("compRank1: ", compRank1)
    }
    let compRank2 = [];
    for (let i = 0; i < byRank2.length; i++){
        compRank2.push(Number(byRank2[i][1]));
        // console.log("compRank2: ", compRank2)
    }
    
    compRank1.sort((a,b) => a-b);
    compRank2.sort((a,b) => a-b);
    console.log("compRank1: ", compRank1)
    console.log("compRank2: ", compRank2)
    
    for (let i = compRank1.length; i >= 0; i--){
        console.log(compRank1[i], compRank2[i])
        if (compRank1[i] > compRank2[i]) return "player1";
        else if (compRank1[i] < compRank2[i]) return "player2";
    }
    return "draw";
}

