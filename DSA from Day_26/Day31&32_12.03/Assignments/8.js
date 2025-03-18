function isPrime(x){
    if(x<2) return false
    if(x==2) return true
    if(x%2==0) return false
    for(let i =3;i<=Math.sqrt(x);i++){
        if(x%i==0){
            return false
        }
    }
    return true 
}

var input = 39;
for(let i=1;i<=input/2;i++){
    if(input%i==0 && isPrime(i)){
        process.stdout.write(i+' ')
    }
}