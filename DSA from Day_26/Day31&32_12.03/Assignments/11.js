function fibonacci(n){
    if(n<=0) return 0;
    if(n==1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
var n =4;
var sum = 0;
for(let i =2 ;i<=n*2;i+=2){
   sum+= fibonacci(i);
   console.log(fibonacci(i));
    
}
 
console.log(sum);
