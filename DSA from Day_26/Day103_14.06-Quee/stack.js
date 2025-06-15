class Stack{
    constructor(){
        this.items = []
    }
    //enqeue//offer
    push(val){
        this.items.push(val)
    }
    //deqeue//poll
    pop(){
        if(this.isEmpty()){
            console.log("Stack is Empty !");
            return
        }
        this.items.pop()
    }
    isEmpty(){
        return this.items.length == 0
    }
}

let obj = new Stack()
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)

console.log(obj.items);
obj.pop()
console.log(obj.items);


