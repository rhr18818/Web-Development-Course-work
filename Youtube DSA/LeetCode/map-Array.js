let mpp = new Map();
let nums = [3,1,2,2,2,1,3];
for (let i = 0; i < nums.length; i++) {
    if (!mpp.has(nums[i])) {
        mpp.set(nums[i], []);
    }
    
    mpp.get(nums[i]).push(i);
}
for(let [i,j] of mpp){
    console.log( i +'-->'+ j.length )
}
