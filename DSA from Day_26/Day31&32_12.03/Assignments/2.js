var a =12 , b=18;

var min = a>b ? a: b;

while(min > 1){
    if(a%min==0 && b%min==0)
        break;
    min--;
}
console.log("GCD of "+a +" and "+ b +" is : "+ min);
