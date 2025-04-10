// 1. By using of startsWith -> function 

// - study first : take two parameter , and return only true and false
//one's for - prefix 
//another - for which position, default is = 0 

let s = ["pay","attention","practise","attend"]
let pref = "at"
let count =0;
for(let i in s){
    if(s[i].startsWith(pref)) count ++
}
console.log(count);
