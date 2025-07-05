
function solve(nums,ans,cur,i){
    if(i==nums.length) {
        ans.push([...cur])
        return
    }
    cur.push(nums[i])
    solve(nums,ans,cur,i+1)
    cur.pop()

    solve(nums,ans,cur,i+1)

}
var subsets = function(nums) {
    let ans = []
    let cur = []
    solve(nums,ans,cur,0)
    return ans
};