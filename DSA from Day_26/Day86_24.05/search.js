
var search = function(nums, target)  {
    let first =0, last = nums.length-1
    while(first<=last){
        let mid = Math.floor((first+last)/2)
        if(nums[mid]==target) return mid
        if(nums[first]<=nums[mid]){
            if(nums[first]<=target && target<=nums[mid]) last = mid
            else first = mid+1
        }
        else{
            if(nums[mid+1]<=target && target<=nums[last]) first = mid+1
            else last = mid
        }

    }
   // return first
};

let nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums,target));
