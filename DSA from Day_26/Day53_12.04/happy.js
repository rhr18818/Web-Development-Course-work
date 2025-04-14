var n = 19
function isHappy(n) {
    // Your code here
    let set = new Set()
    while(n!=1){
        let sum =0
        while(n>0){
            let rem = n%10;
            sum+= (rem*rem);
            n= Math.floor(n/10);
        }
        if(set.has(sum)) return false
        else set.add(sum)
        n = sum
    }
    return true
}

console.log(isHappy(n));
