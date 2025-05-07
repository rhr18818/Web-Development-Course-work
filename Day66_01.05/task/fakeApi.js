function fakeApiCall(endpoint){
    const data ={
        user: ["Ratul","Hasan","Rabbi"],
        posts: ["Hey Champ","Great going Everyone","Great Stuff"]
    }
    const delay = Math.random()*2000 +1000;
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(data[endpoint])
        }, delay);
    })
}

fakeApiCall("user")
    .then(function(data){
        console.log(data);
    })
fakeApiCall("posts")
    .then(function(data){
        console.log(data);
    })