// 1. Toggle character of string -> small to capitl , capital to small !

let prompt = require('prompt-sync')()
let s  = prompt("enter: ")

let ans = ''
for(let i=0;i<s.length;i++){
    let char = s.charCodeAt(i)

    if(char>=65 && char<=90){
        ans+= String.fromCharCode(char+32)
    }
    else if(char>=97 && char<=122){
        ans+= String.fromCharCode(char-32)
    }
}
console.log(ans);
