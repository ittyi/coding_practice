function howMuchIsYourDebt(year:number): number{
    return Math.floor(Math.pow(1.2, year) * 10000)
}
