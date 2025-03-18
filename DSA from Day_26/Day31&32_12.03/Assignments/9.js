const prompt = require('prompt-sync')();

var choice = prompt("Enter Your Choice: ").toLowerCase();

switch(choice){
    case "circle":
        var r = Number(prompt("Enter Radius: "))
        console.log("Circle area: "+ ((Math.PI* (r*r)).toFixed(2)));
        break;
    case "rectangle":
        var a = Number(prompt("Enter side1: "))
        var b = Number(prompt("Enter side2: "))
        console.log("Rectangle area: "+ ((a*b).toFixed(2)));
        break;
    case "triangle":
        var a = Number(prompt("Enter side1: "))
        var b = Number(prompt("Enter side2: "))
        var c = Number(prompt("Enter side3: "))
        var s = (a+b+c)/2;
        console.log("Triangle area: "+ (Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)));
        break;

    default:
        console.log("Wrong Choice!, Choose from - circle, rectangle, or triangle");
        
}