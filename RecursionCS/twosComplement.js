function twosComplement(bits){
    //ここから書きましょう
    let ret_bits = ""
    let last_index = bits.length;

    // ここで全てのbitを反転
    for (let i = 0; i < last_index; i++){
        if (bits[i] == "0") ret_bits = ret_bits + "1";
        else ret_bits = ret_bits + "0";
    }

    // 文字列の最後が0ならそれを置換する
    if (ret_bits[last_index-1] == "0"){
        ret_bits = ret_bits.substring(0, last_index-1) + "1";
    } else {
        for (let i = last_index-1; i >= 0; i--){
            // console.log(i, ret_bits[i])
            if (ret_bits[i] == "0") {
                // 文字列に”0”を見つけたら置換し、そのインデックス以下を０埋め
                ret_bits = ret_bits.substring(0, i) + "1";
                for (let j = last_index-i-1; j > 0; j--){
                    ret_bits += "0"
                }
                break ;
            } else if(i == 0){
                // 全て１だった場合のみ例外処理。このやり方だと桁数が変動したら対処できない
                return "100000000";
            }
        }
    }
    return ret_bits;
}

