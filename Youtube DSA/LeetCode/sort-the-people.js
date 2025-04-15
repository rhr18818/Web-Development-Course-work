// very wierd approach ---don't where did i come out with this ! -
// - couldn't get how the set working----have to use map here !

var heights = [17233,32521,14087,42738,46669,65662,43204,8224]
var names = ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]

var sortPeople = function(names, heights) {
    var set = new Set()//// var set ={}

    // Set is being used like an object. This works only because 
    // JavaScript allows objects to have custom properties, 
    // even if they're instances of Set.
    // This is bad practice and confusing.
    // Use a Map or a plain {} object if you want key-value pairs.

    var s = []
    for(let i=0;i<names.length;i++){
        set[heights[i]] = names[i]
    }
    for(let i=0;i<heights.length-1;i++){
        for(let j=i+1;j<heights.length;j++){
            if(heights[i]<heights[j]){
                [heights[i],heights[j]] = [heights[j],heights[i]]
        }
        }
        
    }
    for(let i =0;i<names.length;i++){
        s[i]=set[heights[i]]
    }
    console.log(s);
    
    
};

sortPeople(names,heights)