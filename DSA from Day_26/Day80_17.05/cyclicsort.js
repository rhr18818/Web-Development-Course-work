let arr = [5,6,7,8,3,1,2,4]

function cyclicSort(arr){
    for(let i= 0;i<arr.length;){
        let correcIndex = arr[i]-1
        if(arr[i] != arr[correcIndex]) swap(arr,i,correcIndex)
        else i++
    }
    
}
function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

cyclicSort(arr)
console.log(arr);
