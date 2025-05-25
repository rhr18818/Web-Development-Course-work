
var findDisappearedNumbers = function(nums) {
    // nums.sort((a,b)=>a-b) ---? if use set no need to sort
    // let set = new Set(nums)
    // let ans =[]
    // for(let i=1;i<=nums.length;i++){
    //    if(!set.has(i)) ans.push(i)
    // }

    //2nd 
    // let ans = []
    // for(let i=0;i<nums.length;i++){
    //     let index = Math.abs(nums[i])-1
    //     if(nums[index]>0) nums[index]= nums[index] * -1
    // }
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]>0) ans.push(i+1)
    // }
    // return ans

    //third --> cyclic sort 

    let ans =[]
    let i=0;
    while(i<nums.length){
        let correctIndex = nums[i]-1
        if(nums[i]!=nums[correctIndex]){
            [nums[i],nums[correctIndex]]= [nums[correctIndex],nums[i]]
        }
        else i++
    }
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=j+1) ans.push(j+1)
    }
    return ans
    
};

let nums = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(nums));
