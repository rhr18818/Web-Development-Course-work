// using extrea array 

// const prompt = require('prompt-sync')();

var arr = [1,2,3,4,5]

var k = 2;
k= k % arr.length;

var temp = new Array(arr.length)

//// for left shifting 
for ( var i= 0;i<arr.length;i++){
    temp[i]=arr[(i+k)%arr.length]
}

/////// for right shifting !!

// k = k % nums.length
// let temp = Array(nums.length)
// for(let i=0;i<nums.length;i++){
//     temp[(i+k)%nums.length] = nums[i]
// }
// for(let i=0;i<nums.length;i++){
//     nums[i] = temp[i]
// }

console.log(temp);
