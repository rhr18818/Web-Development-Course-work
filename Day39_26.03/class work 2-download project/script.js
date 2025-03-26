var btn = document.querySelector('button')
var text = document.querySelector('h5')
var grow = document.querySelector('.growth')

var i=1;
var random = 1 
let limit = Math.floor(Math.random()*100000)
limit = limit>15000 ? limit : 15000

console.log(`Limit set to: ${limit}`); // for debugging only

btn.addEventListener('click',function(){
    var int = setInterval(function(){
        text.innerText = i+'%'
        grow.style.width = i+'%'

        if(i<100){
           random = Math.floor(Math.random()*10)
            i=i+random
        } 
        else if(i+random>100) {
            i=100
            
            console.log("entered"); //for debugging 

            text.innerText = i+'%'
            grow.style.width = i+'%'

            clearInterval(int)
            btn.innerText= 'Downloaded'
            btn.style.opacity = 0.7
            
            return
        }   
        console.log(random);
        
    },Math.floor(limit/100))
    // setTimeout(()=>{
    //     clearInterval(int)
    //     btn.innerText= 'Downloaded'
    //     btn.style.opacity = 0.7
    //     // btn.disabled = true
    // },limit)
})