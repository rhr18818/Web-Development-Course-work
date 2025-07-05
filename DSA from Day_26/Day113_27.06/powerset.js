///version 1 with array 
function solve(nums,ans,cur,i){
    if(i==nums.length) {
        if(cur.length!=0) ans.push(cur.join(""))
        return
    }
    cur.push(nums[i])
    //cur += nums[i]
    solve(nums,ans,cur,i+1)
    cur.pop()
    solve(nums,ans,cur,i+1)

}

class Solution {
    
    AllPossibleStrings(s) {
        // code here
        let ans = []
        let cur = []
        solve(s,ans,cur,0)
        return ans.sort()
    }
}



///version 2 with string


function solve(nums,ans,cur,i){
    if(i==nums.length) {
        if(cur.length!=0) ans.push(cur)
        return
    }
    solve(nums,ans,cur+nums[i],i+1)
    solve(nums,ans,cur,i+1)

}

class Solution {
    
    AllPossibleStrings(s) {
        // code here
        let ans = []
        solve(s,ans,"",0)
        return ans.sort()
    }
}