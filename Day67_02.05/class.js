function getUserInfo(){
    return new Promise(function(res ,rej){
        setTimeout(function(){
            res({id:1,name:'Ratul'})
        },1000)
        
    })
}
function getUserPics(id){
    return new Promise(function(res,rej){
        setTimeout(function(){
            res(['pics1','pics2'])
        },1000)
        
    })
}
getUserInfo()
    .then(function(data){
        console.log(data);
        return getUserPics(data.id)
    })
    .then(function(data){
        console.log(data);
        
    })