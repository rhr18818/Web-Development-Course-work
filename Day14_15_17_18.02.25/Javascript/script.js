// // Assignment 1
// var age = Number(prompt("What is your age?"));
// if(age<18){
//     console.log("You are Minor");
    
// }else if(age>60){
//     console.log("You are a Senior Citizen");
    
// }else{
//     console.log("You are an Adult");
    
// }


// // Assignment 2
// var num =Number(prompt("Enter Number: "));
// if(num%2==0){
//     console.log("Even NUmber");
    
// }else{
//     console.log("Odd Number");
    
// }

// Assignment 3

// var char = prompt("Enter your character:");
// // if(char>'a' && char<'z'){
// //     console.log("small letter");
    
// // }else if(char>'A' && char <'Z'){
// //     console.log("Capital Letter");
    
// // }else{
// //     console.log("Not a letter");
    
// // }
// if(char===char.toLowerCase()){
//     console.log("small letter");
    
// }else if(char===char.toUpperCase()){
//     console.log("Capital Letter");
    
// }else{
//     console.log("Not a letter");
    
// }


// // Assignment 4

// var num1= Number(prompt("Number1: "))
// var num2= Number(prompt("Number2: "))
// var num3= Number(prompt("Number3: "))

// console.log(Math.max(num1,num2,num3));


// 5-6-7 basic problem

// // 8
//  var name = prompt("Your Name: ");
// //  var time = Number(prompt("Enter Time: "));
//  const d = new Date();
//  var time = d.getHours();
// if(time>=5 && time<12){
//     console.log("Good Morning,"+ name);
// }
// else if(time>=12 && time<17){
//     console.log("Good Afernoon,"+ name);
// }
// else if(time>=17 && time<21){
//     console.log("Good Evening"+ name);
// }
// else{
// //     console.log("Good Night"+ name);
// }

// //Assignment 10
// var num1 = Number(prompt("num1:"))
// var arr =[]
// for(var i=1; i<=10;i++){
//     arr.push(num1+"*"+i+" = "+ (num1*i))
//     // console.table(num1+"*"+i+" = "+ (num1*i))
//     // console.log(num1+"*"+i+"= "+ num1*i)


// }
// console.table(arr)

///13

// var num1 = Number(prompt("num1:"))
// var num2 = Number(prompt("num2:"))

// num1= num1+num2
// num2 = num1-num2
// num1 = num1-num2

// console.log("Number1: "+ num1 +" \n "+"Number2: "+ num2);

// var num= '123'
// console.log(num.reverse());


// //Assignment 16

// var num = prompt("Enter Your Number :")
// var sum=0
// // for(var char of num){
// //         sum += Number(char);
// // }
// // console.log(sum);

// num.split('').forEach((char,index )=> {
//     console.log(`${index}: ${char}`);
// });

// //Assignment 17

// var num = prompt("Enter Your String :")
// var len = num.length;
// var check;
// for(var i=0;i<len/2;i++){
//         if(num[i]!==num[len-i-1]){
//             // console.log(num[i] + num[len-i-1]);
            
//             check = true;
//             break;
//         } 
// }
// if(check){
//     console.log("It's not Palindrom");
// }
// else{
//     console.log("It's Palindrom");
// }
// //Assignment 18

var num = prompt("Enter Your String :")
var arr=[]
for(var i=num.length-1;i>=0;i--){
        arr.push(num[i]);
        console.log(num[i]);    
}
console.log(arr.toString().replaceAll(',',''));
