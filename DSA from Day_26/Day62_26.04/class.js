/// reverse a number by recursion --- logic -- rev = (rev*10) + rem

let n = 563
function reverse(n,rev){
    if(n===0) return rev
    return reverse(Math.floor(n/10),(rev*10)+n%10)
}

console.log(reverse(n,0));
