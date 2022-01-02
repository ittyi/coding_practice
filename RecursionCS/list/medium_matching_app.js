function hasSameType(user1,user2){
    // 関数を完成させてください
    let hashMapUser1 = {};
    for (i in user1){
        if (hashMapUser1[user1[i]] === undefined) hashMapUser1[user1[i]] = 1;
        else hashMapUser1[user1[i]] += 1;
    }
    console.log(hashMapUser1)
    let hashMapUser2 = {};
    for (i in user2.length){
        if (hashMapUser2[user2[i]] === undefined) hashMapUser2[user2[i]] = 1;
        else hashMapUser2[user2[i]] += 1;
    }
    console.log(hashMapUser2)

    let keyUser1 = Object.keys(hashMapUser1);
    let keyUser2 = Object.keys(hashMapUser2);
    if (keyUser1.length != keyUser2.length) return false;

    for (let i = 0; i < keyUser1.length; i++){
        console.log(hashMapUser1[keyUser1[i]], hashMapUser2[keyUser2[i]])
        if (hashMapUser1[keyUser1[i]] != hashMapUser2[keyUser2[i]]) return false;
    }
    for (i in keyUser1.length){
        let count1 = 0;
        let count2 = 0;
        for (j in hashMapUser1[keyUser1[i]]){
            if (user1[j-1] == user1[j]) count1++;
            if (user2[j-1] == user2[j]) count2++;
        }
        if (count1 != count2) return false;
    }
    return true;
}
