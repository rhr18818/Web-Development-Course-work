
function binarySearch(nums,target,isStart){
    let first=0,last=nums.length-1 ,ans= -1
    while(first<=last){
        let m = Math.floor((first+last)/2)
        if(nums[m]==target){
            ans = m
            if(isStart){
                last = m-1
            }
            else first = m+1
        }
        else if(nums[m]>target) last = m-1
        else first = m+1
    }
    return ans
}
var searchRange = function(nums, target) {
    return[binarySearch(nums,target,true),binarySearch(nums,target,false)]
};

let nums = [5,7,7,8,8,10]
let target = 8

console.log(searchRange(nums,target));

