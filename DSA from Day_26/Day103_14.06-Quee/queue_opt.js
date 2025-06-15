class Queue{
    constructor(){
        this.items = []
        this.rear = this.front = 0
    }
    //enqeue//offer
    offer(val){
        // this.items.push(val)
        this.items[this.rear] =val
        this.rear++
    }
    //deqeue//poll
    poll(){
        if(this.isEmpty()){
            console.log("Queue is Empty !");
            return
        }
        // this.items.shift()
        const data = this.items[this.front]
        delete this.items[this.front]// optional
        this.front++
        return data
    }
    isEmpty(){
        // return this.items.length == 0
        return this.front == this.rear
    }
    print(){
        for(let i =this.front;i<this.rear;i++){
            process.stdout.write(this.items[i]+' ')
        }
    }
}

let obj = new Queue()
obj.offer(10)
obj.offer(20)
obj.offer(30)
obj.offer(40)

obj.print()
console.log();

obj.poll()

obj.print()

obj.poll()
obj.poll()


// obj.poll()
// obj.poll()


console.log();
console.log(obj.items);
