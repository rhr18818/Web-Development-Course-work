function getUser(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res({id:1,name:"Ratul"})
        }, 1000);
    })
}
function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(["Task 1","Task 2"])
        }, 1000);
    })
}
function getComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(["Great Post","Amazing Content","Nice!!"])
        }, 1000);
    })
}

getUser()
    .then(function(data) {
        console.log(data)
        return getPosts(data.id)
    })
    .then(function(titles){
        console.log(titles);
        return getComments("postId--Random")
    })
    .then(function(cmnts){
        console.log(cmnts);
    })
    .finally(function(){
        console.log("All Data Fetched !");
        
    })
