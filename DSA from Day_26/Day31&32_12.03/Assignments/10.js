var input = 9;
// var temp = (input*input).toString()
var sum = 0;

for(var char of (input*input).toString()){
    sum += Number(char)
}

input===sum ? console.log("Neon Number. ") : console.log("Not a Neon Number. ");

