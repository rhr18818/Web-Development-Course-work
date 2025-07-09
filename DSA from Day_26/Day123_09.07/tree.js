let promt = require('prompt-sync')()
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
        // this.left = this.right = null
    }
}

class Tree{
    buildTree(){
        let data = promt("Enter value: ")
        if(data == -1) return null
        let root = new Node(data)

        console.log(`Enter Left Child of ${data} : `);
        root.left = this.buildTree()

        console.log(`Enter Right Child of ${data} : `);
        root.right = this.buildTree()
        return root
    }
    preOrder(root){
        if(root==null) return
        process.stdout.write(root.val+" ")
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
    PostOrder(root){
        if(root==null) return
        this.PostOrder(root.left)
        this.PostOrder(root.right)
        process.stdout.write(root.val+" ")
    }
    InOrder(root){
        if(root==null) return
        this.InOrder(root.left)
        process.stdout.write(root.val+" ")
        this.InOrder(root.right)
    }
}

let obj = new Tree()
let root = obj.buildTree()
console.log("PreOrder Traversal - ");
obj.preOrder(root)
console.log();
console.log("PostOrder Traversal - ");
obj.PostOrder(root)
console.log();
console.log("InOrder Traversal - ");
obj.InOrder(root)