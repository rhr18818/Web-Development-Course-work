var s = "abba"

let i=0;
let j=s.length-1
let check= true

while(i<j){
    if(s[i]!=s[j]){
        check = false
    }
    i++
    j--
}
if(check) console.log("Palindrom");
else{
    console.log("not");
    
}