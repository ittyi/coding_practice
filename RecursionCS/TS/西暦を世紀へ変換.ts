// Before: https://recursionist.io/dashboard/problems/submissions/208234
// class Solution{
//     public static String getCentury(int year){
//         // 関数を完成させてください
//         String num_to_str = String.valueOf(year);
//         int digits = num_to_str.length() - 2;
//         if (num_to_str.length() <= 2) return "1st century";
//         int century = Integer.parseInt(num_to_str.substring(0, digits))+1;
//         if (num_to_str.substring(digits).equals("00")) century -= 1;

//         num_to_str = String.valueOf(century);
//         if (num_to_str.length() == 2 && num_to_str.charAt(0) == '1') return century + "th century";
//         else if (num_to_str.charAt(num_to_str.length() - 1) == '1') return century + "st century";
//         else if (num_to_str.charAt(num_to_str.length() - 1) == '2') return century + "nd century";
//         else if (num_to_str.charAt(num_to_str.length() - 1) == '3') return century + "rd century";
//         return century + "th century";
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
