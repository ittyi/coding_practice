function applyAdditionalCharges(dollar:number): number {
    return Math.floor(dollar * 1.12 * 1.08)
}

function vacationRental(people:number, day:number): number{
    if (day >= 10) return applyAdditionalCharges(people * day * 50)
    if (day >= 4) return applyAdditionalCharges(people * day * 60)
    return applyAdditionalCharges(people * day * 80)
}
