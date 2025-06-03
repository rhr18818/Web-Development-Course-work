
var intersect = function(nums1, nums2) {
    let map = new Map()
    for(let i=0;i<nums1.length;i++){
        if(!map.has(nums1[i])) map.set(nums1[i],1)
        else{
            map.set(nums1[i],map.get(nums1[i])+1)
        }
    }
    console.log(map);
    
    let ans = []
    for (let i=0;i<nums2.length;i++){
        if(map.has(nums2[i]) && map.get(nums2[i])!=0) {
            ans.push(nums2[i])
            map.set(nums2[i],map.get(nums2[i])-1)
        }
    }
    return ans
};

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

console.log(intersect(nums1,nums2));



// var intersect = function(nums1, nums2) {
//  let map = new Map();
//   let res = [];
//   for (let i of nums1) {
//     map.set(i, (map.get(i) || 0) + 1);
//   }

//   for (let x of nums2) {
//     if (map.has(x) && map.get(x) > 0) {
//       res.push(x);
//       map.set(x, map.get(x) - 1);
//     }
//   }
//   return res;
// };