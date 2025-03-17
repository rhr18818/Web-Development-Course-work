// var amount = Number(prompt("Enter Amount: "))
var amount = 4327;

console.log("₹2000 * : " + Math.floor(amount / 2000));
amount %= 2000;

console.log("₹500 * : " + Math.floor(amount / 500));
amount %= 500;

console.log("₹200 * : " + Math.floor(amount / 200));
amount %= 200;

console.log("₹100 * : " + Math.floor(amount / 100));
amount %= 100;

console.log("₹50 * : " + Math.floor(amount / 50));
amount %= 50;

console.log("₹20 * : " + Math.floor(amount / 20));
amount %= 20;

console.log("₹10 * : " + Math.floor(amount / 10));
amount %= 10;

console.log("₹5 * : " + Math.floor(amount / 5));
amount %= 5;

console.log("₹2 * : " + Math.floor(amount / 2));
amount %= 2;

console.log("₹1 * : " + Math.floor(amount / 1));
amount %= 1;
