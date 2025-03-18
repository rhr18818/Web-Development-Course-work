var n = 8;
var first = 0 ;
var second = 1;
var current ;
console.log(first)
console.log(second)
for ( var i =1 ;i<n-1;i++){
    current = first + second;
    console.log(current);

    // process.stdout.write(current) // -> doesn't work in here ! ( add + ' ') with it , then will

    first = second;
    second = current;
}

