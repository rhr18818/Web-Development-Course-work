var arr = [1,2,3,4,5]

var result = linearSearch(arr,2)
console.log(result+1);


function linearSearch(arr, target){
    for(var i= 0;i<arr.length;i++){
        if(target===arr[i]){
            return i 
        }
    }
    return -1
}


