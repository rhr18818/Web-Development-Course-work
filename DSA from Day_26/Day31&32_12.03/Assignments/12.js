var input = 54829

var arr = []
var largest = 0;
for(var char of input.toString()){
    // arr.push(Number(char))
    if(largest<Number(char)){
        largest= Number(char)
    }
}
// console.log(Math.max(...arr));
console.log(largest);

