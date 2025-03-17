var input = 18;
var copy =input;
var sum = 0;

while (input>0){
    sum += input%10;
    input = Math.floor(input/10);
}
copy%sum == 0? console.log(copy+ " is a Harshed Number. ") : console.log(copy+ " is not a Harshed Number. ");
