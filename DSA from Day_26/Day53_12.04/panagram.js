var sentence = "abcdefghijkzlmnopqrstuvwxy"

function isPangram(sentence) {
    // Your code here
    let set = new Set()
    for(let i=0;i<sentence.length;i++){
        set.add(sentence[i])
    }
    if(set.size ==26) return true
    return false
}

console.log(isPangram(sentence));

