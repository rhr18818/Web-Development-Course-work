function generate(nums){
    let res = [[1]]
    for(let i=0;i<nums-1;i++){
        // each time taking the last inner array ---
        let temp = [0,...res[res.length-1],0]
        //console.log(temp)
        let row =[]
        for(let j=0;j<temp.length-1;j++){
            row.push(temp[j]+temp[j+1])
        }
        res.push(row)
    }
    return res
}

console.log(generate(5))