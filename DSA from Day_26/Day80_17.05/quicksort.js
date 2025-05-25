function partition(arr,s,l){
    //taken first index as pivot
    // let pivot = arr[s]
    // let i=s,j=l
    // while(i<=j){
    //     while(arr[i]<=pivot && i<=l) i++ //// don't give error if not use -- && i<=l --- && j>=s
    //     while(arr[j]>pivot && j>=s) j--
    //     if(i<=j) swap(arr,i,j)
        
    // }
    // swap(arr,s,j)
    // return j

    //taken last index as pivot
    let pivot = arr[l]
    let i=s-1;
    for(let j=s;j<l;j++){
        if(arr[j]<pivot) {
            i++
            swap(arr,i,j)
        }
    }
    swap(arr,i+1,l)
    return i
    
}
function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function quickSort(arr,s,l){
    if(s>=l) return
    let p = partition(arr,s,l)
    quickSort(arr,s,p-1)/// p-1 is necessary for online compiler
    quickSort(arr,p+1,l)
}

let arr = [3,2,9,1,4,6,5]
quickSort(arr,0,arr.length-1)
console.log(arr);
