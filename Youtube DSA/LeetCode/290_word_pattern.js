var wordPattern = function(pattern, s) {
    let map = new Map()
    let set = new Set()///set for bijection --->
    let arr = s.split(' ')
    if(pattern.length !== arr.length) return false ///for edge case 
    for(let i=0;i<arr.length;i++){
        if(!map.has(pattern[i])){
            if(set.has(arr[i])) return false
            map.set(pattern[i],arr[i])
            set.add(arr[i]) ///set for bijection --->
        } 
        //console.log(map)
        if(map.get(pattern[i]) != arr[i]) return false
        
    }
    return true
};

let pattern = "abba"
let s ="dog cat cat dog"

console.log(wordPattern(pattern,s))