let a=20,b=32


///time complexit ----> O(min(a,b))
for(let i= Math.min(a,b);i>=1;i--){
    if(a%i==0 && b%i==0){
        console.log(i);
        break
        
    }
}