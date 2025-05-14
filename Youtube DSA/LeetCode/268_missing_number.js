
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


    let n = nums.length
    let result = (n*(n+1))/2
    let sum = 0
    for(let i=0;i<n;i++){
        sum+= nums[i]
    }
    return result - sum

    // 3rd solution by xor

    // let xor = 0 // if give error --> xor = nums.length and loop i< nums.length !
    // let nums = [9,6,4,2,3,5,7,0,1]
    // for(let i=0;i<=nums.length;i++){
    //     xor ^= i^nums[i]
    // }
    // return xor


};

let nums = [0,1,3]
console.log(missingNumber(nums));
