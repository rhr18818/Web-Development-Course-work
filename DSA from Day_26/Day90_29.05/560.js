var subarraySum = function(nums, k) {
    let map = new Map()
    let sum =0,count=0
    map.set(sum,1)
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(map.has(sum-k)) count+= map.get(sum-k)
        map.set(sum,(map.get(sum)||0)+1)
    }
    return count
};

let nums = [1,2,3], k = 3
console.log(subarraySum(nums,k));
 
