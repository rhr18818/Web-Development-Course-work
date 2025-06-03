var subarraySum = function(nums, k) {
    let map = new Map()
    let sum =0
    let length=0, longest=0
    map.set(sum,-1)
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(map.has(sum-k)){
            length = i-map.get(sum-k)
            console.log(length);
            longest=Math.max(length,longest)
        }
        if(!map.has(sum)) map.set(sum,i)
        console.log(map);
    }
    console.log(map);
    
    return longest
};

let nums = [10, 5, 2, 7, 1, -10], k = 15
console.log(subarraySum(nums,k));
 
