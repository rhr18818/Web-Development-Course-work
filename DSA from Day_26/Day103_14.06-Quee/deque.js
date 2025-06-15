class DeQue{
    constructor(){
        this.items = []
        this.rear = this.front = 0
    }
    //enqeue//offer
    InsertAtLast(val){
        // this.items.push(val)
        this.items[this.rear] =val
        this.rear++
    }
    InsertAtFirst(val){
        // this.items.push(val)
        this.front--
        this.items[this.front] = val
    }
    //deqeue//poll
    DeleteAtFirst(){
        if(this.isEmpty()){
            console.log("DeQue is Empty !");
            return
        }
        // this.items.shift()
        const data = this.items[this.front]
        delete this.items[this.front]// optional
        this.front++
        return data
    }
    DeleteAtLast(){
        if(this.isEmpty()){
            console.log("DeQue is Empty !");
            return
        }
        // this.items.shift()
        this.rear--///incremented after inserted last data ---> that' why decrement first
        const data = this.items[this.rear]
        delete this.items[this.rear]// optional
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

let obj = new DeQue() // 20,10,30,40
obj.InsertAtFirst(10)
obj.InsertAtFirst(20)
obj.InsertAtLast(30)
obj.InsertAtLast(40)

obj.print()
console.log();

console.log(obj.DeleteAtFirst());
console.log(obj.DeleteAtLast());

obj.print()




