///js is prototype based Language

let arr = [1,2,3]
/// run it with browser ---> can see prototype with it --- see .txt file 

console.log(arr);


//////create a prototypee!!

let obj = {
    name : "Ratul",
    age: 34
}
let temp ={
    name : "Rabbi",
    age : 23,
    fun(){
        console.log("something")
    }
}
obj.__proto__ = temp
console.log(obj); ////run it in web


