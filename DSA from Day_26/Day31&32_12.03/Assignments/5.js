var input =13;
var sum= 0;
for(var i =1; i<input/2;i++){
    if (input%2==0){
        sum+=i ;
    }
}
sum>input?console.log("Abundant Number."): console.log("Not an Abundant Number.")
