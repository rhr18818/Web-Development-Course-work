var month =2
var year =2024
var day ;
if(month<8){
    if(month%2==0 && month!=2) day = 30;
    else if(month ==2){
        if(leapYear(year)) day =29
        else day= 28
         
    }
    else day = 31;
}
else if(month>=8){
    if(month%2==0) day = 31;
    else day = 30;
}

console.log(day);


function leapYear(year){
    if(year%4==0 && year%100 != 0){
        return true
    }
    if(year%400 == 0){
        return true
    }
    return false;
}
