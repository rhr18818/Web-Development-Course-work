// All zeros to left and All one's Rigtht

let arr =[ 1, 1, 0,1,0,1,1,0,0]
let i=0,j= 0;
while(i<arr.length){
    if(arr[i]===0){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        j++
    }
    i++
}
console.log(arr);
