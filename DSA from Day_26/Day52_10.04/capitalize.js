let s = "hello, my name is Ratul"

let arr = s.split(" ")
let ans = ''
for(let i in arr){
    let word = arr[i]
    //console.log(arr[i].charAt(0).toUpperCase());
    
    // if(arr[i]<=2) arr[i].toUpperCase()
    // else{
    //     arr[i].charAt(0) = arr[i].charAt(0).toUpperCase()
    //     arr[i].charAt(arr[i].length-1) = arr[i].charAt(arr[i].length-1).toUpperCase()
    // } 
    // -> not doable because string are immutable
    
    if(word<=2) arr[i].toUpperCase()
    else{
        ans += word.charAt(0).toUpperCase()+
               word.slice(1,-1)+
               word.charAt(word.length-1).toUpperCase() + ' '
    }

}
console.log(ans);
