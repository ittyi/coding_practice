function middleSubstring(stringInput:string): string{
    const len = stringInput.length

    if (len <= 2) return stringInput[0]

    const half = len / 2
    const roundUp = Math.ceil(half/2)
    
    if (len % 2 === 0) return stringInput.substring(roundUp, roundUp+half)
    if (Math.floor(half) % 2 === 0) return stringInput.substring(roundUp-1, roundUp+half-1)
    return stringInput.substring(roundUp, roundUp+half)
}
