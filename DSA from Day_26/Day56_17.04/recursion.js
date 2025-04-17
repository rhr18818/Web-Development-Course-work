let a = 10

function temp(a){
    if(a==0) return ///---base case 
    process.stdout.write(a+' ');
    //console.log("hello---!");
    //temp(a-1)
    temp(--a) /// (a--) will give infinte loop ---post increment!! calling fucntion with same value 
}
temp(a)