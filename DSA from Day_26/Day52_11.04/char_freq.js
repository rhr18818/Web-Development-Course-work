var str = "hello kaise hoe"


function characterFrequency(str) {
    // Write your code here
    let arr = new Array(26).fill(0)
    let Achar = 'a'.charCodeAt(0)
    str = str.replaceAll(' ','')
    for(let i in str){
        let char = str.charCodeAt(i)
        arr[char-Achar]++
    }
    console.log(arr,str)
    for(let i in arr){
        if(arr[i]!=0){
            console.log(`${String.fromCharCode(Achar+Number(i))}: ${arr[i]}`)
        }
    }
}

characterFrequency(str)