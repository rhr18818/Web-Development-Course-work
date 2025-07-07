function solve(nums,ans,cur,isVis,i){
    if(i==nums.length){
        ans.push([...cur])
        return
    }
    let set = new Set()
    for(let j=0;j<nums.length;j++){
        if(!isVis[j]){
            if(set.has(nums[j])) continue
            set.add(nums[j])
            
            isVis[j]= true
            cur.push(nums[j])
            solve(nums,ans,cur,isVis,i+1)
            isVis[j]=false
            cur.pop()
        }
    }
}
var permuteUnique = function(nums) {
    let ans = []
    let cur = []
    let isVis = new Array(nums.length).fill(false)
    solve(nums,ans,cur,isVis,0)
    return ans
};

let nums = [1,2,2]
console.log(permuteUnique(nums));