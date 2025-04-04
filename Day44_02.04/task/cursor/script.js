var container = document.querySelector('.container')

document.querySelector('.main').addEventListener('mousemove',function(elem){
    container.style.opacity = 1
    container.style.left = elem.x+'px'
    container.style.top = elem.y+'px'
    
})