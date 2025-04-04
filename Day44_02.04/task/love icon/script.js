var container = document.querySelector('.container')
var icon = document.querySelector('i')
var icon2 = document.querySelector('.icon')
var click = true
container.addEventListener('dblclick',function(){
        setTimeout(function(){
            icon.style.transform = 'translate(-50%,-50%) scale(0)'
        },1500)
        
        if(click){
            icon.style.transform = 'translate(-50%,-50%) scale(1.2)'
            icon2.style.color ='red'
            click = false
        }else{
            icon2.style.color =''
            click = true
        }
        
    
})