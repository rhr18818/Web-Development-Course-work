var  nums = [2,7,11,15]
var target= 9

var twoSum = function(nums, target) {
    var map = new Map()
    //var ans = [-1,-1]
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])) return [map.get(target-nums[i]),i]
        map.set(nums[i],i)
    }
    return [-1,-1]
};

console.log(twoSum(nums,target));
