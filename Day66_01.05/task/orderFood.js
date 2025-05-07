function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            let temp = Math.random() < 0.7
            if(temp) res()
            else rej()
        },2000)
    })
}

orderFood()
    .then(function(){
        console.log("Pizze Deliverred,Successfuly");
    })
    .catch(function(){
        console.log("Failed");
    })