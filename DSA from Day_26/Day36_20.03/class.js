var arr =[1,1,0,1,0,1,1,0,0]

let arr0 =[]
let arr1 =[]

for(let i=0;i<arr.length;i++){
    if(arr[i]===0) arr0.push(arr[i])
    else arr1.push(arr[i])
}
console.log(arr0.concat(arr1));

