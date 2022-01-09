// カード、デッキ、ディーラーをそれぞれ 1 から自分の力で作成し、「Pair of Cards」を設計
// ♣6(6)の形式
class Card{
    constructor(mark, value, intValue){
        this.mark = mark;
        this.value = value;
        this.intValue = intValue;
    }

    printCard(){
        return this.mark + this.value + "(" + this.intValue + ")";
    }
}

// Deck 4*13で52枚のデッキを作る
class Deck{
    deckGenerator(){
        let allMark = ['♣', '♥', '♠', '♦'];
        let allNumber = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

        let deck = [];
        for (let i in allMark){
            for (let j in allNumber){
                deck.push(new Card(allMark[i], allNumber[j], Number(j)+1));
            }
        }
        return deck;
    }
}

class Dealer{
    shuffle(deck){
        for (let i in deck){
            let randamIndex = Math.floor(Math.random() * 52);
            let tmp = deck[i];
            deck[i] = deck[randamIndex];
            deck[randamIndex] = tmp;
        }
        return deck;
    }

    distribution(shuffle_deck, num_players){
        let players = [];
        for (let i = 0; i < num_players; i++){
            let hand_cards = [];
            for (let j = 0; j < 5; j++){
                hand_cards.push(shuffle_deck[0])
                shuffle_deck.shift();
            }
            players.push(hand_cards);
        }
        return players;
    }
}

let deck1 = new Deck();
let deck2 = deck1.deckGenerator();
let dealer = new Dealer();
let shuffle_deck = dealer.shuffle(deck2);
let players = dealer.distribution(shuffle_deck, 2);

// なんか変なことしてる 笑
// 仕方ないから加工します。
let player1 = [];
for (let i = 0; i < players[0].length; i++){
    player1.push(players[0][i]["mark"] + players[0][i]["value"])
}
let player2 = [];
for (let i = 0; i < players[1].length; i++){
    player2.push(players[1][i]["mark"] + players[1][i]["value"])
}
console.log("player1: ", player1)
console.log("player2: ", player2)

console.log(winnerPairOfCards(player1, player2))


// 作り直した。テストケースまでclear
// // ["♠2","♠4","♥K","♥A","♣10"],["♣Q","♦3","♣J","♠A","♦8"]
function winnerPairOfCards(player1,player2){
    // hashmapの作成 ※この時、マークは関係ないので除外
    let hashMapNum1 = hashMapming(player1);
    let hashMapNum2 = hashMapming(player2);

    // 2 < 3 < 4 < 5 < 6 … J < Q < K < A 
    // あと比較したいのは、ランクの強さを、『枚数が多いものから。』
    // 一旦、後に使うためのデータ加工をする。 それぞれ手札の[ランク（文字), 実質強さ(indexで表現), 持ってる枚数]
    let byRank1 = dataProcessing(hashMapNum1);
    let byRank2 = dataProcessing(hashMapNum2);

    // 一番最初の勝敗判定：最大数の多さ 
    // テスト例：["♣4","♥7","♥7","♥7","♣J"],["♥7","♥7","♣K","♠Q","♠Q"]
    for (let i = 4; i > 0; i--){
        let compMaxNumRank1 = compMax(byRank1, i);
        let compMaxNumRank2 = compMax(byRank2, i);

        // 勝敗判定
        if (compMaxNumRank1[0] > compMaxNumRank2[0]) return "player1";
        else if (compMaxNumRank1[0] < compMaxNumRank2[0]) return "player2";
        else if (compMaxNumRank1[1] > compMaxNumRank2[1]) return "player1";
        else if (compMaxNumRank1[1] < compMaxNumRank2[1]) return "player2";
    }

    // 上記も同じ場合、次に枚数の多いカードを同様に比べ、勝敗が決まるまですべてのカードを比べる
    // ["♥9","♠8","♦7","♣6","♦5"],["♥9","♥8","♠7","♦6","♥4"]
    // ["♥3","♠4","♦5","♣6","♦7"],["♥2","♥3","♠5","♦6","♥7"]  等々
    let compRank1 = [];
    for (let i = 0; i < byRank1.length; i++){
        compRank1.push(Number(byRank1[i][1]));
    }
    let compRank2 = [];
    for (let i = 0; i < byRank2.length; i++){
        compRank2.push(Number(byRank2[i][1]));
    }

    compRank1.sort((a,b) => a-b);
    compRank2.sort((a,b) => a-b);
    for (let i = compRank1.length; i >= 0; i--){
        if (compRank1[i] > compRank2[i]) return "player1";
        else if (compRank1[i] < compRank2[i]) return "player2";
    }
    return "draw";
}

function hashMapming(player){
    let hashMapNum = {};
    for (i in player){
        if (hashMapNum[player[i].slice(1)] >= 1) hashMapNum[player[i].slice(1)] += 1;
        else hashMapNum[player[i].slice(1)] = 1;
    }
    return hashMapNum;
}

function dataProcessing(hashMapNum){
    let rankAscending = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let byRank = [];
    for (i in rankAscending){
        if (hashMapNum[rankAscending[i]] != undefined){
            byRank.push([rankAscending[i], i , hashMapNum[rankAscending[i]]]);
        }
    }
    return byRank;// それぞれ手札の[ランク（文字), 実質強さ(indexで表現), 持ってる枚数]の二次元配列
}

function compMax(byRank, i){
    let compMaxNum = 0;
    let compMaxRank = 0;
    for (let j = 0; j < byRank.length; j++){
        if (i == byRank[j][2] && compMaxRank < Number(byRank[j][1])){
            compMaxNum = byRank[j][2];
            compMaxRank = Number(byRank[j][1]);
        } else if (i == byRank[j][2]){ // このケースに対処["♥2","♠A","♦6"],["♥2","♥2","♥3"]
            compMaxNum = byRank[j][2];
            compMaxRank = Number(byRank[j][1]);
        }
    }
    let comp = [compMaxNum, compMaxRank];
    return comp;
}
