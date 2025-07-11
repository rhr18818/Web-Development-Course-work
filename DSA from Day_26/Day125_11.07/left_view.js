class Solution {
    leftView(root) {
        // your code here
        let ans = []
        function solve(root,level,ans){
            if(root==null) return 
            if(level== ans.length) ans.push(root.data)
            solve(root.left,level+1,ans)
            solve(root.right,level+1,ans)
        }
        solve(root,0,ans)
        return ans
    }
}