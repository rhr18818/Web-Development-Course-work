var input = 2384

var sum = 0
for(var char of input.toString()){
    // arr.push(Number(char))
    if(Number(char)%2==0){
       sum+= Number(char)
    }
}
// console.log(Math.max(...arr));
console.log(sum);
