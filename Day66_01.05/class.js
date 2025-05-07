function step1(){
    return new Promise((res,rej)=>{
        console.log("Step One");
        res();
    })
}
function step2(){
    return new Promise((res,rej)=>{
        console.log("Step Two");
        res();
    })
}
function step3(){
    return new Promise((res,rej)=>{
        console.log("Step Three");
        res();
    })
}

step1()
    .then(step2)///step2() and step2 --- are same given same result
    .then(step3)
    .then(function (){
        console.log("All executed");
        
    })