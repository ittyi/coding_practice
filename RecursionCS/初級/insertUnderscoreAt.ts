function insertUnderscoreAt(s:string, i:number): string{
    if(s.length > i) return s.substring(0, i) + '_' + s.substring(i)
    return s
}
