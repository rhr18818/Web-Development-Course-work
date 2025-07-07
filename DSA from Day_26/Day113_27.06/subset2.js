//aprroach 1 with set --3 ms
function solver(nums,ans,cur,i,set){
    if(i==nums.length){
        let setvalue = cur.join('').toString()
        if(!set.has(setvalue)){
            set.add(setvalue)
            ans.push([...cur])
        }
        
        return
    }
    
    cur.push(nums[i])
    solver(nums,ans,cur,i+1,set)
    cur.pop()
    solver(nums,ans,cur,i+1,set) 
    
}
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=> a-b)
    let ans = []
    let cur = []
    let set = new Set()
    solver(nums,ans,cur,0,set)
    console.log(set);
    
    return ans
};


// ///approach 2 ---> optimized 


function solver(nums,ans,cur,i){
    if(i==nums.length){
        let setvalue = cur.toString()
        if(!set.has(setvalue)){
            set.add(setvalue)
            ans.push([...cur])
        }
        
        return
    }
  
    cur.push(nums[i])
    solver(nums,ans,cur,i+1)
    cur.pop()
    while(i+1<nums.length && nums[i]==nums[i+1]){
        i++
    }
    solver(nums,ans,cur,i+1)
    
    
    
}
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=> a-b)
    let ans = []
    let cur = []
    solver(nums,ans,cur,0)
    return ans
};

let nums = [1,2,2]
console.log(subsetsWithDup(nums));
