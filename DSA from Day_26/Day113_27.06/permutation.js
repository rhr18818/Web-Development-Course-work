/// approach 1

function solve(nums,ans,cur,isVis,i){
    if(i==nums.length){
        ans.push([...cur])
        return
    }
    for(let j=0;j<nums.length;j++){
        if(!isVis[j]){
            isVis[j]= true
            cur.push(nums[j])
            solve(nums,ans,cur,isVis,i+1)
            isVis[j]=false
            cur.pop()
        }
    }
}
var permute = function(nums) {
    let ans = []
    let cur = []
    let isVis = new Array(nums.length).fill(false)
    solve(nums,ans,cur,isVis,0)
    return ans
};


///aproach 2
function solve(nums,ans,i){
    if(i==nums.length){
        ans.push([...nums])
        return
    }
    for(let j=i;j<nums.length;j++){
        [nums[i], nums[j]]= [nums[j], nums[i]]
        solve(nums,ans,i+1); ///just for semi colon gave error !!
        [nums[i], nums[j]]= [nums[j], nums[i]]
        // [nums[i], nums[j]] = [nums[j], nums[i]]; // ✅ Swap
        // solve(nums, ans, i + 1);                 // 🔁 Recurse
        // [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}
var permute = function(nums) {
    let ans = []
    let cur = []
    solve(nums,ans,0)
    return ans
};