//for right shifting !!

// const prompt = require('prompt-sync')();

var arr = [1,2,3,4,5]

var k = 3;
k= k % arr.length;

reverse(arr,0,arr.length-1)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)

console.log(arr);


function reverse(arr, i, j){
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
        j--
    }
}