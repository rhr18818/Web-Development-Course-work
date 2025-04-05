// using extrea array 

// const prompt = require('prompt-sync')();

var arr = [1,2,3,4,5]

var k = 2;

/////// for right shifting !!

k = k % arr.length
let temp = Array(arr.length)
for(let i=0;i<arr.length;i++){
    temp[(i+k)%arr.length] = arr[i]
}
for(let i=0;i<arr.length;i++){
    arr[i] = temp[i]
}

console.log(arr);
