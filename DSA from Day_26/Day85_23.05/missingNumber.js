/// with cyclic sort ---!
/// another solution is done in ---> youtube leetocde section ---! 268


var missingNumber = function(nums) {
    // 1st approach

    // nums.sort((a,b) => a-b)
    // for(let i=0;i<=nums.length;i++){
    //     if(nums[i]!=i) return i
    // }
     
    //2nd ---> 0 to n --> natural num sum -> formula
    // let res = nums.length;
        
    // for (let i = 0; i < nums.length; i++) {
    //         res += i - nums[i];
    //     }
        
    // return res;


    // let n = nums.length
    // let result = (n*(n+1))/2
    // let sum = 0
    // for(let i=0;i<n;i++){
    //     sum+= nums[i]
    // }
    // return result - sum

    // 3rd solution by xor

    // let xor = 0 // if give error --> xor = nums.length and loop i< nums.length !
    // let nums = [9,6,4,2,3,5,7,0,1]
    // for(let i=0;i<=nums.length;i++){
    //     xor ^= i^nums[i]
    // }
    // return xor




    ///cyclic sort ---
    let i = 0 
    while(i<nums.length){
        let correctIndex = nums[i]
        if(nums[i] != nums[correctIndex] && nums[i]<nums.length ){
            [nums[i],nums[correctIndex]]= [nums[correctIndex],nums[i]]
        }
        else i++
    }
    for(let j= 0;j<nums.length;j++){
        if(j!=nums[j]) return j
    }
    return nums.length
};

let nums = [0,1,2,3]
console.log(missingNumber(nums));
