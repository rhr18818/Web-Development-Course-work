
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest=0
    for(let n of set){///iterate set ---> array gave TLE---for Duplicacy
        if(!set.has(n-1)){
            let count = 1
            while(set.has(n+count)) count++
            longest = Math.max(longest,count)
        }
       
    }
    return longest
};

let nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums));
