var x = 3;

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
// console.log(isPrime(9));


for(let i=1;i<=10;i++){
    if(isPrime(i)){
        process.stdout.write(i*i + ' ');
    }
}