var input = "0471958697" ;
var i=1;
var sum =0;
for(char of input){
    sum+= i * Number(char);
    // console.log(`${i} * ${Number(char)} = ${sum}`);
    i++;
}
// if(sum%11==0){
//     console.log("Valid ISBN"); 
// }
 sum%11 == 0 ?  console.log("Valid ISBN") : console.log("Invalid ISBN")
