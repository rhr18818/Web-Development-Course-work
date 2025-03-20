var arr =[2,96,69,77,145,20]
    var max =-Infinity;
    let secondmax = -Infinity;
    for(let i =0;i<arr.length;i++){
        if(max<arr[i]){
            secondmax =max
            max=arr[i]
        }
        else if( secondmax <arr[i] && secondmax<max){
            secondmax =arr[i]
        }
        console.log(secondmax,max)
    }