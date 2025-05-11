///majority element

let arr = [2,2,1,1,1,2,2]

function majElem(arr){
    let count =0;
    let ans
    for(let i=0;i<arr.length;i++){
        if(count==0){
            ans= arr[i]
            count=1;
        }
        else if(ans != arr[i]) count --
        else count ++
    }
    return ans
}

console.log(majElem(arr));
