// Before: https://recursionist.io/dashboard/problems/submissions/965463
// function getCentury(year:number): string{
//     const division = year / 100

//     if (year % 100 === 0) return String(division) + englishAbbreviation(division) +" century"
    
//     const century = Math.floor(division+1)
//     return String(century) + englishAbbreviation(century) +" century"
// }

// function englishAbbreviation(year :number): string{
//     const n = String(year)
//     const len = n.length

//     if (len === 2 && n[0] === "1") return "th"

//     switch (n[len-1]) {
//     case "1":
//         return "st"
//     case "2":
//         return "nd"
//     case "3":
//         return "rd"
//     default:
//         return "th"
//     } 
// }

// After: https://recursionist.io/dashboard/problems/submissions/965463
function getCentury(year:number): string{
    const division = year / 100

    if (year % 100 === 0) return String(division) + englishAbbreviation(division) +" century"
    
    const century = Math.floor(division+1)
    return String(century) + englishAbbreviation(century) +" century"
}

function englishAbbreviation(year :number): string{
    const n = String(year)
    const len = n.length

    if (len === 2 && n[0] === "1") return "th"

    switch (n[len-1]) {
    case "1":
        return "st"
    case "2":
        return "nd"
    case "3":
        return "rd"
    default:
        return "th"
    } 
}
