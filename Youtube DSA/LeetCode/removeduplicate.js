let nums = [1,1,2,3]

var removeDuplicates = function(nums) {
    let set = new Set(nums)
    nums.length =0///set array to 0 []
    nums.push(...set.values())
    return set.size
    
};
console.log(removeDuplicates(nums),nums);
