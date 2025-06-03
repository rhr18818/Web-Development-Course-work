
var findMaxLength = function(nums) {
    //let k = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) nums[i] = -1;
    }
    let sum=0,length=0,longest=0;
    let map = new Map()
    map.set(sum,-1)
    for(let i=0;i<nums.length;i++){
        sum+= nums[i]
        if(map.has(sum)){
            length = length = i-map.get(sum)
            longest=Math.max(length,longest)
        }
        else map.set(sum,i)
    }
    return longest
};

let nums = [0,1]
console.log(findMaxLength(nums));
