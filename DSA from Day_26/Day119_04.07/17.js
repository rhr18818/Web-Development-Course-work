/**
 * @param {string} digits
 * @return {string[]}
 */


function solver(digits,ans,cur,i,map){
    if(i==digits.length){
        if(cur.length>0) ans.push(cur)
        return
    }
    let temp = map.get(digits.charAt(i))
    for(let j=0;j<temp.length;j++){
        //cur += temp.charAt(j) ---> append new letter at end every call --> wrong
        solver(digits,ans,cur+temp.charAt(j),i+1,map)
    }
} 

var letterCombinations = function(digits) {
    let ans = []
    let map = new Map()
    map.set('2', "abc");
    map.set('3', "def");
    map.set('4', "ghi");
    map.set('5', "jkl");
    map.set('6', "mno");
    map.set('7', "pqrs");
    map.set('8', "tuv");
    map.set('9', "wxyz");

    solver(digits,ans,"",0,map)

    return ans
};