class Queue{
    constructor(){
        this.items = []
    }
    //enqeue//offer
    offer(val){
        this.items.push(val)
    }
    //deqeue//poll
    poll(){
        if(this.isEmpty()){
            console.log("Queue is Empty !");
            return
        }
        this.items.shift()
    }
    isEmpty(){
        return this.items.length == 0
    }
}

let obj = new Queue()
obj.offer(10)
obj.offer(20)
obj.offer(30)
obj.offer(40)

obj.poll()
obj.poll()
obj.poll()
obj.poll()
obj.poll()


console.log(obj.items);
