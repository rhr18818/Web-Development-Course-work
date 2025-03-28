var arr = [1,2,3,4,5]

var result = binarySearch(arr,2)
console.log(result+1);

arr.sort((a,b)=> a-b)

// console.log(arr);


function binarySearch(arr, target){
    let s=0, e= arr.length-1;
    while(s<=e){
        let mid = Math.floor((s+e)/2 )// here has limitation problem -> for tha can use = mid = s+ (e-s)/2
        if(arr[mid]===target) return mid
        else if(arr[mid]<target) {
            s = mid+1
        }
        else{
            e = mid-1
        }
    }
    return -1
}


