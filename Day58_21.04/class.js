//

// function tofee(name){
//     this.name =name
//     this.price = 10////---> wrong way - will create price for  new object ---extra memory cost
// }
function tofee(name){
    this.name =name
}
tofee.prototype.price =10; //// will not create a new memory for every new obj creation 

let t1 = new tofee("alpenlibe")
let t2 = new tofee("Dairy Milk")

console.log(t1.price ,t2);//--- t1.price is accessible and prototype memory is shared -- no new memory used !




