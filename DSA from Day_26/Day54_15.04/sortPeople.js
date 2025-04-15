var heights = [17233,32521,14087,42738,46669,65662,43204,8224]
var names = ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]

var sortPeople = function(names, heights) {
    let map = new Map()
    let ans = []
    for(let i=0;i<heights.length;i++){
        map.set(heights[i],names[i])
    }
    heights.sort((a,b) => b-a)
    console.log(heights);
    
    for(let i=0;i<heights.length;i++){
        ans[i] = map.get(heights[i])
    }
    return ans
    
};

console.log(sortPeople(names,heights))