// Unsolved , First have to learn how to find Subset 



var nums = [3,4,5,6,7,8]

let sum = 0
    for(let i =0;i<nums.length;i++){
        sum += nums[i]
        console.log(` single element sum : ${nums[i]}`);
    }
    console.log(` First sum : ${nums[i]}`);
    let temp= nums[0];
    for(let i =1;i<nums.length && nums.length > 1;i++){
        temp ^= nums[i]

    }
    console.log(` total element xor : ${temp}`);
    sum += temp;
    console.log(` Middle sum : ${nums[i]}`);

    for(let i =0;i<nums.length-1 && nums.length > 2;i++){
        
        for(let j=i+1;j<nums.length;j++){
            temp = nums[i]
            temp ^= nums[j];
            console.log(` ${nums[i]} + ${nums[j]} : ${temp}`);
            sum += temp ;
        }
        
    }
    console.log(` Last sum : ${nums[i]}`);
console.log(sum);
