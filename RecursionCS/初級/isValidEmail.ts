// function isValidEmail(email:string): boolean{
//     if (email[0] == '@') return false
//     else if (email.indexOf(' ') != -1) return false
//     else if (email.split('@').length - 1 != 1) return false
//     else if (email.substring(email.indexOf('@')).indexOf('.') == -1) return false

//     return true
// }

function isValidEmail(email: string): boolean {
    // ^         : 文字列の先頭
    // [^\s@]+  : スペースと@以外の文字が1文字以上
    // @         : @マーク（1つだけ）
    // [^\s@]+  : スペースと@以外の文字が1文字以上
    // \.        : ドット
    // [^\s@]+  : スペースと@以外の文字が1文字以上
    // $         : 文字列の末尾
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
