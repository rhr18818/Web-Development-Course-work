var str = "hello kaise hoe"


function characterFrequency(str) {
    // Write your code here
    let map = new Map()
    str = str.replaceAll(' ','')
    for(let i=0;i<str.length;i++){
        if(map.has(str[i])){
            map.set(str.charAt(i),map.get(str.charAt(i))+1)
        }
        else{
            map.set(str.charAt(i),1)
        }
    }
    for(let [key,value] of map){
        console.log(`${key}: ${value}`)
    }
}

characterFrequency(str)