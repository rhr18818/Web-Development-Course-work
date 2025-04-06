/**
 * @param {number} num
 * @return {string}
 */
var num = 1994;
var intToRoman = function(num) {
    let s = ''
    const valueSymbol =[
       [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
       [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
       [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
    ];
    
    for(let [value,symbol] of valueSymbol){
        let count = Math.floor(num/value)
        s += symbol.repeat(count);
        num -= count*value;
    }
    return s;
};

//// -> run in 1 ms in LeetCode this solution

// function intToRoman(num) {
//     const val = [
//         1000, 900, 500, 400,
//         100, 90, 50, 40,
//         10, 9, 5, 4, 1
//     ];

//     const symbols = [
//         "M", "CM", "D", "CD",
//         "C", "XC", "L", "XL",
//         "X", "IX", "V", "IV", "I"
//     ];

//     let roman = "";
//     for (let i = 0; i < val.length; i++) {
//         while (num >= val[i]) {
//             roman += symbols[i];
//             num -= val[i];
//         }
//     }
//     return roman;
// }

////


console.log(intToRoman(num))