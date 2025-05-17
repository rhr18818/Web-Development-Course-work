/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// function bruteforce(nums){
// let ans =[]
//     let set = new Set()/// for duplicate check
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             for(let k= j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]==0){
//                    let temp = [nums[i],nums[j],nums[k]].sort((a,b)=> a-b)
//                    let jstemp = temp.toString()//js can't compare array
//                     if(!set.has(jstemp)){
//                         set.add(jstemp)
//                         ans.push(temp)
//                     }
                    
//                 }
//             }
//         }
//     }
//     return ans
// }
var threeSum = function(nums) {
    let ans = []
    nums.sort((a,b)=> a-b)
    for(let i=0;i<nums.length;i++){
        if (nums[i] > 0) break;//// for effiecinyy ---> in a sorted array if nums[i] is alreay pos-- then sum ==0 impossible
        if(i!=0 && nums[i-1]==nums[i]) continue
        let j=i+1,k=nums.length-1
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]
            if(sum==0){
                let temp = [nums[i],nums[j++],nums[k--]]// increment j and k
                ans.push(temp)
                while(j<k && nums[j]==nums[j-1]) j++
                while(j<k && nums[k]==nums[k+1]) k--
            }
            else if(sum<0) j++
            else k--
        }
    }
    return ans;
};

let nums = [-2,0,1,1,2]
console.log(threeSum(nums));
