// 例題
// 3の倍数のときfizz、5の倍数のときbuzz、15の倍数の時、fizzbuzzと返す、echoという関数を作成してください。
// これ以外の時は、NOT FOUND! と返してください。
function echo(num){
    if (num % 15 === 0) return "fizzbuzz";
    else if (num % 5 === 0) return "buzz";
    else if (num % 3 === 0) return "fizz";
    else return "NOT FOUND!";
}

console.log(echo(3));
console.log(echo(5));
console.log(echo(15));
console.log(echo(67));
 //-> fizz
// echo(5) //-> buzz
// echo(15) //-> fizzbuzz
// echo(67) //-> NOT FOUND!
