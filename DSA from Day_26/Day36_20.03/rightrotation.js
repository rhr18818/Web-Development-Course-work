let arr=[1,2,3,4,5]
for(let i=arr.length-2;i>=0;i--){
    [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
}
console.log(arr);