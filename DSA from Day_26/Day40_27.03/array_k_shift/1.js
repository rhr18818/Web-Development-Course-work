// const prompt = require('prompt-sync')();

var arr = [1,2,3,4,5]

var k = 2;
k= k % arr.length;
for (let j=0;j<k;j++){
    for(var i=0;i<arr.length-1;i++){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    }
}


console.log(arr);
