// var prompt = require('prompt-sync')()

var arr = [3,2,1,5,4,4]

selection(arr)

console.log(arr);

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!=i){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }
        
    }
}