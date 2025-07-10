///Level Order traversal
// ---> 102

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = []
    if(!root) return ans
    let q =[]
    q.push(root)
    while(q.length != 0){
        let size = q.length
        let cur = []
        for(let i =0;i<size;i++){
            let temp = q.shift()
            cur.push(temp.val)
            if(temp.left != null) q.push(temp.left)
            if(temp.right != null) q.push(temp.right)
        }
        ans.push(cur)
    }

    return ans
};