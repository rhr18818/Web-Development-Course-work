// using extrea array 

// const prompt = require('prompt-sync')();

var arr = [1,2,3,4,5]

var k = 2;
k= k % arr.length;

var temp = new Array(arr.length)

for ( var i= 0;i<arr.length;i++){
    temp[i]=arr[(i+k)%arr.length]
}

console.log(temp);
