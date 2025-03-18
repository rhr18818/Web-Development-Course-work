var a =12 , b=15;

function GCD(a,b){
    var min = a>b ? a: b;
    while(min > 1){
        if(a%min==0 && b%min==0)
            break;
        min--;
    }
    return min;
}

console.log("LCM of "+a+" and "+b+ " = "+ ((a*b)/GCD(a,b)));


