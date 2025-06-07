function lastFourHint(stringInput:string): string{
    if (stringInput.length < 6) return 'There is no Hint'
    return 'Hint is:' + stringInput.substring(stringInput.length - 4)
}
