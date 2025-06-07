class node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = null
        this.size = 0
    }
    insertAtHead(val){
        let newNode = new node(val)
        if(this.head==null){
            this.head = newNode
            return
        }
        newNode.next= this.head
        this.head = newNode
        this.size++ 
        
    }
    printLL(){
        let temp = this.head
        if(temp==null){
            console.log("Empty Link-List");
            return
        }
        while(temp != null){
            process.stdout.write(temp.val+"->")
            temp = temp.next
        }
        console.log("null");
    }
    insertAtLast(val){
        let newNode = new node(val)
        if(this.head==null){
            this.head = newNode
            return
        }
        let temp = this.head
        while(temp.next != null){
            temp = temp.next
        }
        temp.next = newNode

    }
    deleteAtFirst(){
        if(this.head==null){
            console.log("Empty link list--Nothing to delete");
            return
        }
        this.head = this.head.next
    }
    deleteAtLast(){
         if(this.head==null){
            console.log("Empty link list--Nothing to delete");
            return
        }
        if(this.head.next ==null){
            this.head = null
            return
        }

        let temp = this.head
        
        while(temp.next.next != null){
            temp =temp.next
        }
        // temp.next = null
        temp.next = temp.next.next
    }
}

let list = new LinkList()

list.insertAtHead(10)
list.insertAtHead(20)
list.insertAtHead(30)
list.insertAtHead(40)
list.printLL()

list.insertAtLast(5)
list.printLL()

list.deleteAtFirst()
list.printLL()

list.deleteAtLast()
list.printLL()