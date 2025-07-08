/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function solver(arr,ans,cur,i,target){
    if(i==arr.length){
        if(target==0) ans.push([...cur])
        return
    }
    if(arr[i]<=target){
        cur.push(arr[i])
        solver(arr,ans,cur,i,target-arr[i])
        cur.pop()
    }
    solver(arr,ans,cur,i+1,target)

}

var combinationSum = function(candidates, target) {
    let ans = []
    let cur = []
    solver(candidates,ans,cur,0,target)
    return ans
};