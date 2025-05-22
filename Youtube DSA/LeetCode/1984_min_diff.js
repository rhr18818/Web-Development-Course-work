var minimumDifference = function(nums, k) {
    if(k==1) return 0
    nums.sort((a,b)=>a-b)
    min = Infinity
    for(let i =0;i<nums.length-k+1;i++){
        let sub = nums[k+i-1] - nums[i]
        min = Math.min(sub,min)
    }
    return min
   
};

let nums = [87063,61094,44530,21297,95857,93551,9918]
console.log(minimumDifference(nums,6));
