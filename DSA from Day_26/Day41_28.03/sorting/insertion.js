// var prompt = require('prompt-sync')()

var arr = [3,2,1,5,4,4]

insertion(arr)

console.log(arr);

function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>=key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key

    }
}