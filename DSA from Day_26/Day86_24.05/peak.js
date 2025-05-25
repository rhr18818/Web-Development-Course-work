
var peakIndexInMountainArray = function(arr) {
    let first =0, last = arr.length-1
    while(first<last){
        let mid = Math.floor((first+last)/2)
        if(arr[mid]<=arr[mid+1]) first = mid+1
        else last = mid

    }
    return first
};

let arr = [0,10,5,2]
console.log(peakIndexInMountainArray(arr));
