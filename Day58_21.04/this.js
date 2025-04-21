
// function tofee(name){
//     this.name = '##'+name
//     this.printName = function(){
//         console.log(name);///---will return the original value !! not ---"##Mango"
//         console.log(this.name);///--- print "##Mango"--- obhect under name
        
        
//     }
// }
// let t1 = new tofee("Mango")


function Employee(name,age,id,salary){
    this.name = name
    this.age = age
    this.id = id
    this.salary =salary
    
}
Employee.prototype.printDetails = function(){
    console.log(`I am ${this.name},my age is ${this.age}, my id is ${this.id} and my salary is ${this.salary}`);
    
}
let t1 = new Employee("Ratul",24,51,100000)

t1.printDetails()