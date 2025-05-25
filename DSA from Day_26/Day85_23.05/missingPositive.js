var firstMissingPositive = function(nums) {
    let n = nums.length
    let i = 0
    while(i<n){
        let correctIndex= nums[i]-1
        if(nums[i]>0 && nums[i]<n && nums[i]!= nums[correctIndex]){
            [nums[i],nums[correctIndex]]= [nums[correctIndex],nums[i]]
        }
        else i++
    }
    for(let j=0;j<n;j++){
        if(nums[j] != j+1) return j+1
    }
    return n+1
};

let nums= [1,2,0]
console.log(firstMissingPositive(nums));
