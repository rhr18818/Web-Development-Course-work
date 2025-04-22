let nums = [1,1,2,3]

var removeDuplicates = function(nums) {
    let i=1;
    for(let j=1;j<nums.length;j++){
        if(nums[j] !== nums[i-1]){
            ///whenever find the first non repeating value
            ///ex: 1,1,2 --> when j point to 2 --condition true-- and i is still in the 
            /// initialized value, first time condtion is being true
            nums[i] = nums[j]
            i++
        }
    }
    return i
};
console.log(removeDuplicates(nums),nums);
