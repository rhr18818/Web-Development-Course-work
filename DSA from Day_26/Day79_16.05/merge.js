function conqur(arr,f,mid,l){
    let temparr = new Array(l-f+1).fill(0)
    let i= f,j=mid+1,k=0
    while(i<=mid && j<=l){
        if(arr[i]<arr[j]) temparr[k++] = arr[i++]
        else temparr[k++] = arr[j++]
    }
    while(i<=mid) temparr[k++] = arr[i++]
    while(j<=l) temparr[k++] = arr[j++]

    for(let i =0;i<temparr.length;i++){
        arr[f++]= temparr[i];
    }
}

function devide(arr,f,l){
    if(f>=l) return 
    let mid = Math.floor((f+l)/2)
    devide(arr,f,mid)
    devide(arr,mid+1,l)
    conqur(arr,f,mid,l)
}


let arr = [10,12,13,5,18,16,8,1]
devide(arr,0,arr.length-1)
console.log(arr);
